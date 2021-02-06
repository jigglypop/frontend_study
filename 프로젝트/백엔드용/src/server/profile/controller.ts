import { NextFunction, Request, Response } from "express";
import { RequestDecoded } from "../lib/jwtMiddleware";
import Profile from '../models/profile'

// 프로필 읽기
export const readProfile = async ( req : RequestDecoded, res : Response, next : NextFunction ) => {
    try {
        const { id } = await req.params
        const profile = await Profile.findById(id)
        res.status(200).json({
            profile: profile
        })
    } catch(e){
        res.status(404).send({ error: e.toString() })
    }
}

