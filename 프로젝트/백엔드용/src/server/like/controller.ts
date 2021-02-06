import { NextFunction, Request, Response } from "express";
import { RequestDecoded } from "../lib/jwtMiddleware";
import Profile from '../models/profile'
import Post from '../models/post'

// 좋아요
export const like = async ( req : RequestDecoded, res : Response, next : NextFunction ) => {
    const { postId, profileId } = req.params
    try{
        const profile = await Profile.findById(profileId)
        const post  = await Post.findById(postId)
        if (profile.postlike.indexOf(postId) === -1 && post.userlike.indexOf(profileId) === -1){
            await profile.postlike.push(postId)
            await post.userlike.push(profileId)
        } else{
            await profile.postlike.splice(profile.postlike.indexOf(postId), 1)
            await post.userlike.splice(post.userlike.indexOf(profileId), 1)
        }
        await post.save()
        await profile.save()
        res.status(200).json({ 
            like :{
                postlike : profile.postlike,
                userlike : post.userlike
            }
        })
    }catch(e){
        res.status(404).send({ error: e.toString() })
    }
}
// // 삭제
// export const remove = async ( req : Request, res : Response, next : NextFunction ) => {
//     const { id } = req.params
//     try{
//         await Post.findByIdAndRemove(id).exec()
//         res.status(200).json({ message: '포스트가 삭제되었습니다.' })
//     }catch(e){
//         res.status(404).send({ error: e.toString() })
//     }

// }

// // 업데이트
// export const update = async ( req : Request, res : Response, next : NextFunction ) => {
//     const { id } = req.params
//     try{
//         const post = await Post.findByIdAndUpdate(id, req.body, { new : true })
//         res.status(200).json({
//             post: post
//         })
//     }catch(e){
//         res.status(500).send({ error: e.toString() })
//     }
// }

