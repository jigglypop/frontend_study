import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User, { IUser } from "../models/User";

dotenv.config();

const checkAuth = async (context: any) => {
  const authHeader = await context.req.headers.authorization;
  if (authHeader) {
    const token: string = await authHeader.split("Bearer ")[1];
    const decoded: any = await jwt.verify(
      token,
      process.env.SECRET_KEY ? process.env.SECRET_KEY : ""
    );
    const now = await Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 365) {
      const username = await decoded.username;
      const user: IUser | null = await User.findOne({ username });
      if (user) {
        return {
          ...user._doc,
          id: user._id,
          username: user.username,
          email: user.email,
          createdAt: user.createdAt,
        };
      }
    }
  }
  throw new Error("토큰이 제공되지 않았습니다.");
};

export default checkAuth;
