import Post from "../../models/Post";
import checkAuth from "../../util/checkAuth";

interface writeCommentType {
  postId: string;
  body: string;
}

interface deleteCommentType {
  postId: string;
  commentId: string;
}

interface Indexable {
  [key: string]: any;
}
const commentResolver = {
  Mutation: {
    async writeComment(
      _: any,
      { postId, body }: writeCommentType,
      context: any
    ) {
      const { username } = await checkAuth(context);
      if (body.trim() === "") {
        throw new Error("댓글을 입력해 주세요");
      }
      const post = await Post.findById(postId);
      if (!username) {
        throw new Error("로그인이 필요합니다.");
      }
      if (post && username) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });
        await post.save();
        return post;
      } else {
        throw new Error("포스트가 없습니다.");
      }
    },

    async deleteComment(
      _: any,
      { postId, commentId }: deleteCommentType
    ) // context: any
    {
      const post = await Post.findById(postId);
      if (post) {
        const IndexContent: Indexable = await post.comments;
        const commentIndex = await IndexContent.findIndex(
          (c: any) => c.id === commentId
        );
        if (commentIndex !== -1) {
          await IndexContent.splice(commentIndex, 1);
          await post.save();
          return post;
        }
        throw new Error("댓글이 없습니다.");
      }
      throw new Error("포스트가 없습니다.");
    },
  },
};
export default commentResolver;
