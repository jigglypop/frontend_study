import { NextFunction, Response } from "express";
import { RequestDecoded } from "../lib/jwtMiddleware";
import Profile from '../models/profile'

// 팔로우
export const follow = async ( req : RequestDecoded, res : Response, next : NextFunction ) => {
    const { myId, yourId } = req.params
    try{
        const myprofile = await Profile.findById(myId)
        const yourprofile  = await Profile.findById(yourId)
        if (myId === yourId) throw new Error("같은 이름입니다.")
        if (myprofile.following.indexOf(yourId) === -1 && yourprofile.follower.indexOf(myId) === -1){
            await myprofile.following.push(yourId)
            await yourprofile.follower.push(myId)
        } else{
            await myprofile.following.splice(myprofile.following.indexOf(yourId), 1)
            await yourprofile.follower.splice(yourprofile.follower.indexOf(myId), 1)
        }
        await yourprofile.save()
        await myprofile.save()
        res.status(200).json({ 
            follow :{
                following : yourprofile.following,
                follower : yourprofile.follower
            }
        })
    }catch(e){
        res.status(404).send({ error: e.toString() })
    }
}
