import { gql } from "apollo-server";

export const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    summary: String!
    title: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
  }
  type Comment {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
  }
  type Like {
    id: ID!
    username: String!
    createdAt: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  input CheckInput {
    token: String!
  }
  type Query {
    listPosts(page: Int!): [Post]
    readPost(postId: ID!): Post
    readComment(postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    check(username: String!): User!
    writePost(body: String!, title: String!, summary: String!): Post!
    updatePost(postId: String!, body: String!, title: String!, summary: String!): Post!
    deletePost(postId: ID!): String!
    writeComment(postId: String!, body: String): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
`;
