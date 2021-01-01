import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserInputError } from "apollo-server";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../../util/validators";
import User, { IUser } from "../../models/User";
import dotenv from "dotenv";
import checkAuth from "../../util/checkAuth";

interface checkType {
  username: string;
}

interface loginType {
  username: string;
  password: string;
}

interface registerType {
  registerInput: {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
  };
}

dotenv.config();
const generateToken = (user: IUser) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    process.env.SECRET_KEY ? process.env.SECRET_KEY : "",
    { expiresIn: "365d" }
  );
};

const userResolver = {
  Mutation: {
    async check(_: any, { username }: checkType, context: any) {
      const user: IUser = await checkAuth(context);
      // if (user && user.username === username) {
      if (user) {
        return {
          ...user._doc,
          id: user._id,
          username: user.username,
          email: user.email,
          createdAt: user.createdAt,
        };
      }
    },
    async login(_: any, { username, password }: loginType) {
      const { errors, valid } = validateLoginInput(username, password);
      if (!valid) {
        throw new UserInputError("서버 에러", { errors });
      }
      const user = await User.findOne({ username });
      if (!user) {
        errors.general = "같은 이름의 유저가 없습니다.";
        throw new UserInputError("같은 이름의 유저가 없습니다.", { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "비밀번호가 맞지 않습니다.";
        throw new UserInputError("비밀번호가 맞지 않습니다.", { errors });
      }

      const token = generateToken(user);
      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async register(
      _: any,
      {
        registerInput: { username, email, password, confirmPassword },
      }: registerType
    ) {
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError("서버 에러", { errors });
      }
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("이미 있는 유저 이름입니다.", {
          errors: {
            username: "이미 있는 유저 이름입니다.",
          },
        });
      }
      password = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      const res: IUser = await newUser.save();
      const token = await generateToken(res);
      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
export default userResolver;
