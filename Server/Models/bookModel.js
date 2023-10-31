import mongoose, { Schema, model } from "mongoose";

const BookSchema = new Schema(
  {
    bookTitle: {
      type: String,
      trim: true,
    },
    author: {
      type: String,
      trim: true,
    },
    summary: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
const Books = model("Books", BookSchema);
export default Books;