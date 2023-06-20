import mongoose from "mongoose";
import { postSchema } from "./postSchema";
import { authorSchema } from "./authorSchema";
import "dotenv/config";

mongoose.connect(
  `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`
);

let db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to DB");
});

export const Post = mongoose.model("post", postSchema);
export const Author = mongoose.model("author", authorSchema);
