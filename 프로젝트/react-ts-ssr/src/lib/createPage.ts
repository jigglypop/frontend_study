import { HelmetData } from "react-helmet"
import { ChunkExtractor } from '@loadable/server';

interface createPageProps {
    html: string,
    helmet: HelmetData,
    webExtractor: ChunkExtractor
}

const createPage = ({html, helmet, webExtractor}: createPageProps) =>{
    return(
    `<!DOCTYPE html>
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
        </html>`
    )
}

export default createPage