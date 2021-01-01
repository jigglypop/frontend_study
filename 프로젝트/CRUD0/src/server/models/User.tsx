import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  createdAt: string;
  _doc: any;
}

const userSchema: Schema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

export default mongoose.model<IUser>("User", userSchema);
