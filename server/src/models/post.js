import mongoose from "mongoose";
const Schema = mongoose.Schema;
let postSchema = new Schema(
  {
    caption: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
    likes: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
    collection: "posts",
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
