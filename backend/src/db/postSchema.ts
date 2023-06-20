import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export const postSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => uuidv4(),
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  author: {
    type: String,
    ref: "author",
  },
  imageUrl: {
    type: String,
  },
});
