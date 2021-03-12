import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

// route imports
import userRouter from "./routes/user.js";
import followRouter from "./routes/follow.js";
import postRouter from "./routes/post.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// db
connectDB();

// app middlewares

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// route middlewares
app.use("/api", userRouter);
app.use("/api", followRouter);
app.use("/api", postRouter);

const port = process.env.PORT || 5000;

app.listen(5000, () => console.log(`listening on port ${port}`));
