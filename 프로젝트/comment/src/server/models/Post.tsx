import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  body: string;
  username: string;
  summary: string;
  title: string;
  createdAt: any;
  comments: object[];
  likes: object[];
  _doc: any;
}

const postSchema = new Schema({
  body: String,
  summary: String,
  title: String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

export default mongoose.model<IPost>("Post", postSchema);
