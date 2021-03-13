import Post from "../models/post.js";
import User from "../models/user.js";

const createPost = async (req, res) => {
  let { caption, imageSrc } = req.body;

  try {
    const newPost = new Post({
      caption: caption,
      imageSrc: imageSrc,
      userId: req.user,
    });

    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).json(err);
  }
};

const findUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

const getPosts = async (req, res) => {
  try {
    const userId = req.user;
    const posts = await Post.find({ userId: { $ne: req.user } }).populate(
      "userId"
    );

    // console.log(newPosts);
    // console.log(filterPosts);
    res.json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
  // const posts = await Post.find({});
  // res.json(posts);
};

const getPostsByUser = async (id) => {
  try {
    // const userId = req.user;
    const posts = await Post.find({ userId: id });

    // console.log(newPosts);
    // console.log(filterPosts);
    return posts;
  } catch (err) {
    return err;
  }
};

const likePost = async (req, res) => {
  const post = await Post.findById(req.params.postId);

  post.likes.includes(req.params.userId)
    ? post.likes.forEach((item, id) => {
        if (item.toString() === req.params.userId) {
          post.likes.splice(id, 1);
          post.save();
        }
        return;
      })
    : post.likes.push(req.params.userId);
  post.save();
  res.json(post);
};
const unlikePost = async (req, res) => {};

export { createPost, getPosts, getPostsByUser, likePost, unlikePost };
