import mongoose,{ Document, model, Schema } from 'mongoose'

export interface IRecomment extends Document{
    user : {
        _id : string;
        profileId : string;
        username : string;
    }
    content : string;
    createdAt: Date;
}

const RecommentSchema : Schema<IRecomment> = new Schema({
    user: {
        _id: mongoose.Types.ObjectId,
        profileId : String,
        username: String,
    },
    content: { type: String , required: true },
    createdAt: {
        type: Date,
        default : Date.now
    }
})

export default model<IRecomment>('Recomment', RecommentSchema);
