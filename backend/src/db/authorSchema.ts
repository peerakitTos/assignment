import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export const authorSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => uuidv4(),
  },
  name: {
    type: String,
  },
  posts: [
    {
      type: String,
      ref: "post",
    },
  ],
});
