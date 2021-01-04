import express from 'express';
import Post from 'src/server/models/Post';

const getPost = async (req : express.Request, res : express.Response, next: express.NextFunction) =>{
    const urlObject = req.url.split('/').slice(1).filter(str=>str !== 'favicon.ico' && str !== '').map(str => decodeURI(str))
    const postId = urlObject[1]
    const results = await Post.findById(postId)
    if (results) {
        res.write(results)
        console.log(results)
    }
    next()
}
export default getPost