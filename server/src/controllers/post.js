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
    const posts = await Post.find({ userId: { $ne: req.user } });
    const newPosts = [];
    posts.forEach(async (post) => {
      const user = await findUserById(post.userId);
      newPosts.push(user);
    });
    console.log(newPosts);
    // console.log(filterPosts);
    res.json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
  // const posts = await Post.find({});
  // res.json(posts);
};

export { createPost, getPosts };
