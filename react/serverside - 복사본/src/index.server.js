import React from "react";
import ReactDONServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom";
import App from "./App";

const app = express();
const serverRender = (req, res, next) => {
  const context = {};
  const jsx = (
    <StaticRouter>
      <App />
    </StaticRouter>
  );
  const root = ReactDONServer.renderToString(jsx);
  res.send(root);
};

app.use(serverRender);
app.listen(5000, () => {
  console.log("listening http://localhost:5000");
});
