import express from "express";
import { auth } from "..//middleware/authMiddleWare.js";
import {
  createPost,
  getPosts,
  likePost,
  unlikePost,
} from "../controllers/post.js";

const router = express.Router();

router.post("/new-post", auth, createPost);
router.get("/posts", auth, getPosts);
router.post("/post-like/:postId/:userId", likePost);
router.post("/post-unlike", auth, unlikePost);

// router.post("/signin", signin);
// router.get("/", (req, res) => {
//   res.send("hi");
// });

export default router;
