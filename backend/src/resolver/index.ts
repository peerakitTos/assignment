import { Author, Post } from "../db/connection";

export const resolver = {
  posts: async () => {
    const posts = await Post.find().populate("author");
    const data = posts.map((post) => {
      return {
        id: post._id,
        title: post.title,
        content: post.content,
        imageUrl: post.imageUrl,
        author: post.author,
      };
    });
    return data;
  },

  authors: async () => {
    const authors = await Author.find();
    return authors.map((author) => {
      return {
        id: author._id,
        name: author.name,
      };
    });
  },

  post: async ({ id }: { id: String }) => {
    const post = await Post.findById(id).populate("author");
    post!.id = post!._id;
    return post;
  },

  createPost: async (data: {
    title: string;
    content: string;
    imageUrl: string;
    author: string;
  }) => {
    const { title, content, imageUrl, author } = JSON.parse(
      JSON.stringify(data)
    );
    const post = await new Post({
      title: title,
      content: content,
      imageUrl: imageUrl,
      author: author,
    }).save();

    const authorEntity = await Author.findById(author);
    authorEntity?.posts.push(post.id);
    authorEntity?.save();

    return post.populate("author");
  },
};
