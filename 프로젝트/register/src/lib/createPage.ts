import { ChunkExtractor } from "@loadable/server";
import { HelmetData } from "react-helmet";

interface HTMLProps {
    helmet:HelmetData,
    webExtractor:ChunkExtractor,
    html:string
}

export default ({helmet, webExtractor, html}: HTMLProps)=>{
    return(`
      <!DOCTYPE html>
        <html lang="en">
          <head>
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
