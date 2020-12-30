import Post from "../../models/Post";
import { IUser } from "../../models/User";
import checkAuth from "../../util/checkAuth";

interface listPostsType {
  page: number;
}
interface readPostType {
  postId: string;
}
interface writePostType {
  body: string;
  title: string;
  summary: string;
}
interface updatePostType {
  postId: string;
  body: string;
  title: string;
  summary: string;
}
interface deletePostType {
  postId: string;
}
interface likePostType {
  postId: string;
}
interface Indexable {
  [key: string]: any;
}
const postResolver = {
  Query: {
    async listPosts(_: any, { page }: listPostsType) {
      const posts = await Post.find();
      const list = await posts.sort((a, b) => {
        const B: any = new Date(b.createdAt);
        const A: any = new Date(a.createdAt);
        return B.getTime() - A.getTime();
      });
      return list;
    },
    async readPost(_: any, { postId }: readPostType) {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error("포스트가 없습니다.");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async readComment(_: any, { postId }: readPostType) {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return { ...post, comments: post.comments };
        } else {
          throw new Error("포스트가 없습니다.");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async writePost(
      _: any,
      { body, title, summary }: writePostType,
      context: any
    ) {
      const user: IUser = await checkAuth(context);
      const newPost = await new Post({
        body,
        title,
        summary,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });
      const post = await newPost.save();
      return post;
    },
    async updatePost(
      _: any,
      { postId, body, title, summary }: updatePostType,
      context: any
    ) {
      const user: IUser = await checkAuth(context);
      try {
        const post = await Post.findById(postId);
        if (post) {
          if (post.username === user.username){
            post.body = await body
            post.title = await title
            post.summary = await summary
            await post.save()
            return post;
          }else{
            throw new Error("글 수정 권한이 없습니다.");
          }
        } else {
          throw new Error("포스트가 없습니다.");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async deletePost(_: any, { postId }: deletePostType, context: any) {
      try {
        const user = await checkAuth(context);
        const post = await Post.findById(postId);
        if (post && post.username === user.username) {
          await post.deleteOne();
          return "포스트가 삭제되었습니다.";
        }else {
          throw new Error("삭제할 권한이 없습니다.");
        }
      } catch (err) {
        throw new Error("서버 에러");
      }
    },
    async likePost(_: any, { postId }: likePostType, context: any) {
      const { username } = await checkAuth(context);
      const post = await Post.findById(postId);
      if (post) {
        const IndexLike: Indexable = await post.likes;
        if (IndexLike.find((like: any) => like.username === username)) {
          const likeIndex = await IndexLike.findIndex(
            (like: any) => like.username === username
          );
          await IndexLike.splice(likeIndex, 1);
        } else {
          await IndexLike.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }
        await post.save();
        return post;
      } else {
        throw new Error("포스트가 없습니다.");
      }
    },
  },
};
export default postResolver;
