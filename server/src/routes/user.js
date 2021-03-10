import express from "express";
import { signup, signin } from "../controllers/user.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/", (req, res) => {
  res.send("hi");
});

export default router;
