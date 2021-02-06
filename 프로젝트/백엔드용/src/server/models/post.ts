import mongoose, { Document, model, Schema } from 'mongoose'
import { IComment } from './comment';

export interface IPost extends Document{
    title: string;
    content: string;
    tags: string[];
    createdAt: Date;
    user : {
        _id : string;
        profileId: string;
        username : string;
    }
    userlike : string[]
    comment : IComment[]
}


const PostSchema : Schema<IPost> = new Schema({
    title: { type: String , required: true },
    content: { type: String , required: true },
    tags: { type: [String] , required: false },
    createdAt: {
        type: Date,
        default : Date.now
    },
    userlike : { type: [String] , required: false },
    user: {
        _id: mongoose.Types.ObjectId,
        profileId: String,
        username: String,
    },
    comment: [
            {
                _id: mongoose.Types.ObjectId,
                user: {
                    _id: mongoose.Types.ObjectId,
                    profileId: String,
                    username: String,
                },
                content:String,
                createdAt: {
                    type: Date,
                    default : Date.now
                },
                recomment: [
                            {
                                _id: mongoose.Types.ObjectId,
                                user: {
                                    _id: mongoose.Types.ObjectId,
                                    profileId: String,
                                    username: String,
                                },
                                content:String,
                                createdAt: {
                                    type: Date,
                                    default : Date.now
                                }
                        }
                ]
        }
    ]
})

export default model<IPost>('Post', PostSchema);
