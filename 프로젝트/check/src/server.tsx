import express from 'express';
import path from 'path';
import React, { createContext } from 'react';
import { StaticRouter } from 'react-router-dom';
import { ChunkExtractor } from '@loadable/server';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReactDOMServer, { renderToString } from 'react-dom/server';

import createPage from './lib/createPage';
import {config} from 'dotenv'

import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import resolvers from "./server/graphql/resolvers";

import { typeDefs } from "./server/graphql/typeDefs";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";

import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'


config()
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL
const graphqlServer = new ApolloServer({
  resolvers,
  typeDefs,
  context: ({ req }) => ({ req }),
});
const server = express();
server.use(cors());
graphqlServer.applyMiddleware({ app: server });

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.client.js').map((config: any) => {
    config.output.path = config.output.path.replace('dist/dist/', 'dist/');
    return config;
  });

  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(webpackConfig);

  server.use(
    webpackDevMiddleware(compiler, {
      logLevel: 'silent',
      publicPath: webpackConfig[0].output.publicPath,
      writeToDisk: true,
    }),
  );
  server.use(webpackHotMiddleware(compiler));
}


server.use(express.static(path.resolve(__dirname)));
server.get('*', async (req : express.Request, res : express.Response) => {
  const nodeStats = path.resolve(__dirname, './node/loadable-stats.json');
  const webStats = path.resolve(__dirname, './web/loadable-stats.json');
  const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
  const { default: App } = nodeExtractor.requireEntrypoint();
  const webExtractor = new ChunkExtractor({ statsFile: webStats });

  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

  const context = {};

  const preloadContext = {
    done:false,
    promises:[]
  }
  const PreloadContext = createContext(preloadContext)

  const jsx = webExtractor.collectChunks(
      <PreloadContext.Provider value={preloadContext}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </PreloadContext.Provider>
  );

  ReactDOMServer.renderToStaticMarkup(jsx)
  try{
    await Promise.all(preloadContext.promises)
  }catch(e){
    return res.status(500)
  }
  preloadContext.done = true

  const html = ReactDOMServer.renderToString(jsx);
  const helmet = Helmet.renderStatic();
  res.set('content-type', 'text/html');
  res.send(createPage({helmet, webExtractor, html}));
});


server.get("/*", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (
    req.headers &&
    req.headers.host &&
    req.headers.host.match &&
    req.headers.host.match(/^www/) !== null
  ) {
    res.redirect(
      `https://${req.headers.host.replace(/^www\./, "")}${req.url}`
    );
  }
  next();
});


// server.use(cors());
server.use(logger("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, "public")));
if (MONGO_URL) {
  mongoose
    .connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((e) => {
      console.error(e);
    });
}
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
});
