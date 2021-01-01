import { ChunkExtractor } from "@loadable/server";
import { HelmetData } from "react-helmet";
import { helmetObjectProps } from "src/server";

interface HTMLProps {
    helmet:HelmetData,
    webExtractor:ChunkExtractor,
    html:string,
    helmetObject: helmetObjectProps
}

export default ({helmet, webExtractor, html, helmetObject}: HTMLProps)=>{
    return(`
      <!DOCTYPE html>
        <html lang="en">
          <head>
            <title id="helmettitle">블로그 ${helmetObject.name} ${helmetObject.title} ${helmetObject.summary}</title>
            <meta name="viewport" content="width=device-width, user-scalable=no">
            <meta name="google" content="notranslate">
            ${helmet.title.toString()}
            ${webExtractor.getLinkTags()}
            ${webExtractor.getStyleTags()}
          </head>
          <body>
            <div id="root">${html}</div>
            ${webExtractor.getScriptTags()}
          </body>
        </html>
    `);  
}
