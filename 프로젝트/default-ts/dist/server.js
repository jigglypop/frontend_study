/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/createPage.ts":
/*!*******************************!*\
  !*** ./src/lib/createPage.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  helmet,\n  webExtractor,\n  html\n}) => {\n  return `\n      <!DOCTYPE html>\n        <html lang=\"en\">\n          <head>\n            <meta name=\"viewport\" content=\"width=device-width, user-scalable=no\">\n            <meta name=\"google\" content=\"notranslate\">\n            ${helmet.title.toString()}\n            ${webExtractor.getLinkTags()}\n            ${webExtractor.getStyleTags()}\n          </head>\n          <body>\n            <div id=\"root\">${html}</div>\n            ${webExtractor.getScriptTags()}\n          </body>\n        </html>\n    `;\n});\n\n//# sourceURL=webpack:///./src/lib/createPage.ts?");

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/reducers */ \"./src/store/reducers/index.ts\");\n/* harmony import */ var _lib_createPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/createPage */ \"./src/lib/createPage.ts\");\n\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\nif (true) {\n  const webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\n  const webpackConfig = __webpack_require__(/*! ../webpack.client.js */ \"./webpack.client.js\").map(config => {\n    config.output.path = config.output.path.replace('dist/dist/', 'dist/');\n    return config;\n  });\n\n  const webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\n  const webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\n  const compiler = webpack(webpackConfig);\n  app.use(webpackDevMiddleware(compiler, {\n    logLevel: 'silent',\n    publicPath: webpackConfig[0].output.publicPath,\n    writeToDisk: true\n  }));\n  app.use(webpackHotMiddleware(compiler));\n}\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname)));\napp.get('*', (req, res) => {\n  const nodeStats = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, './node/loadable-stats.json');\n  const webStats = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, './web/loadable-stats.json');\n  const nodeExtractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_4__[\"ChunkExtractor\"]({\n    statsFile: nodeStats\n  });\n  const {\n    default: App\n  } = nodeExtractor.requireEntrypoint();\n  const webExtractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_4__[\"ChunkExtractor\"]({\n    statsFile: webStats\n  });\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_7__[\"createStore\"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n  const context = {};\n  const jsx = webExtractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(App, null))));\n  const html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_8__[\"renderToString\"])(jsx);\n  const helmet = react_helmet__WEBPACK_IMPORTED_MODULE_5__[\"Helmet\"].renderStatic();\n  res.set('content-type', 'text/html');\n  res.send(Object(_lib_createPage__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({\n    helmet,\n    webExtractor,\n    html\n  }));\n});\nconst port = 5000;\napp.listen(port, () => {\n  console.log(\"---------------서버 실행---------------\");\n  console.log(`http://localhost:${port}`);\n});\n\n//# sourceURL=webpack:///./src/server.tsx?");

/***/ }),

/***/ "./src/store/reducers/counterReducer.ts":
/*!**********************************************!*\
  !*** ./src/store/reducers/counterReducer.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction counter(state = 0, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1;\n\n    case 'DECREMENT':\n      return state - 1;\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (counter);\n\n//# sourceURL=webpack:///./src/store/reducers/counterReducer.ts?");

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _counterReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counterReducer */ \"./src/store/reducers/counterReducer.ts\");\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  counterReducer: _counterReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./src/store/reducers/index.ts?");

/***/ }),

/***/ "./webpack.client.js":
/*!***************************!*\
  !*** ./webpack.client.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const path = __webpack_require__(/*! path */ \"path\");\r\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\r\nconst nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\r\nconst LoadablePlugin = __webpack_require__(/*! @loadable/webpack-plugin */ \"@loadable/webpack-plugin\");\r\nconst MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\r\nconst createStyledComponentsTransformer = __webpack_require__(/*! typescript-plugin-styled-components */ \"typescript-plugin-styled-components\").default;\r\n\r\nconst devMode = \"development\" !== 'production';\r\nconst hotMiddlewareScript = `webpack-hot-middleware/client?name=web&path=/__webpack_hmr&timeout=20000&reload=true`;\r\nconst styledComponentsTransformer = createStyledComponentsTransformer();\r\n\r\nconst getEntryPoint = target => {\r\n  if (target === 'node') {\r\n    return ['./src/App.tsx'];\r\n  }\r\n  return devMode ? [hotMiddlewareScript, './src/index.tsx'] : ['./src/index.tsx'];\r\n};\r\n\r\nconst getConfig = target => ({\r\n  mode: devMode ? 'development' : 'production',\r\n\r\n  name: target,\r\n\r\n  target,\r\n\r\n  entry: getEntryPoint(target),\r\n\r\n  output: {\r\n    path: path.resolve(__dirname, `dist/${target}`),\r\n    filename: '[name].js',\r\n    publicPath: '/web/',\r\n    libraryTarget: target === 'node' ? 'commonjs2' : undefined,\r\n  },\r\n\r\n  module: {\r\n    rules: [\r\n      {\r\n        test: /\\.tsx?$/,\r\n        use: [\r\n          'babel-loader',\r\n          {\r\n            loader: 'ts-loader',\r\n            options: {\r\n              getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),\r\n            },\r\n          },\r\n        ],\r\n      },\r\n      {\r\n        test: /\\.(scss|css)$/,\r\n        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],\r\n      },\r\n    ],\r\n  },\r\n\r\n  resolve: {\r\n    extensions: ['.js', '.jsx', '.ts', '.tsx'],\r\n    alias: {\r\n      pages: path.resolve('src/pages/'),\r\n      components: path.resolve('src/components/'),\r\n      actions: path.resolve('src/store/actions/'),\r\n      reducers: path.resolve('src/store/reducers/'),\r\n      util: path.resolve('src/util/'),\r\n    },\r\n  },\r\n\r\n  plugins:\r\n    target === 'web'\r\n      ? [new LoadablePlugin(), new webpack.HotModuleReplacementPlugin(), new MiniCssExtractPlugin()]\r\n      : [new LoadablePlugin(), new MiniCssExtractPlugin()],\r\n\r\n  externals: target === 'node' ? ['@loadable/component', nodeExternals()] : undefined,\r\n});\r\n\r\nmodule.exports = [getConfig('web'), getConfig('node')];\r\n\n\n//# sourceURL=webpack:///./webpack.client.js?");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/server\");\n\n//# sourceURL=webpack:///external_%22@loadable/server%22?");

/***/ }),

/***/ "@loadable/webpack-plugin":
/*!*******************************************!*\
  !*** external "@loadable/webpack-plugin" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22@loadable/webpack-plugin%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mini-css-extract-plugin\");\n\n//# sourceURL=webpack:///external_%22mini-css-extract-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "typescript-plugin-styled-components":
/*!******************************************************!*\
  !*** external "typescript-plugin-styled-components" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"typescript-plugin-styled-components\");\n\n//# sourceURL=webpack:///external_%22typescript-plugin-styled-components%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");\n\n//# sourceURL=webpack:///external_%22webpack-node-externals%22?");

/***/ })

/******/ });