import { buildSchema } from "graphql";

export const schema = buildSchema(`
input PostInput {
  title: String
  content: String
  imageUrl: String
  author: String
}

type Author {
  id: ID!
  name: String!
  posts: [Post]
}

type Post {
  id: ID!
  title: String!
  author: Author!
  imageUrl: String
  content: String
}

type Query {
  posts: [Post]
  post(id: String!): Post
  authors: [Author]
}

type Mutation {
  createPost(title: String, content: String, imageUrl: String, author: String): Post
}
`);
