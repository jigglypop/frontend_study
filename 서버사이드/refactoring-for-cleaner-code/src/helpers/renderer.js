import React from "react";
import Home from "../client/components/Home";
import { renderToString } from "react-dom/server";

export default () => {
  const content = renderToString(<Home />);

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
