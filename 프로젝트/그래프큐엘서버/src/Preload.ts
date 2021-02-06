import { createContext, useContext } from "react"

interface ContextProps  {
    done: boolean;
    promises: Array<any>;
    post:object
}

const PreloadContext = createContext<ContextProps | null>(null)
export default PreloadContext
export const Preloader = ({resolve }:any) => {
    const preloadContext : any = useContext(PreloadContext)
    if (!preloadContext) return null
    if (preloadContext.done) return null
    preloadContext.promises.push(Promise.resolve(resolve()))
    return null
}