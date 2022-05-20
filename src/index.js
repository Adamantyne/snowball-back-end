import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/userRouter.js";
import videosRouter from "./routes/videosRouter.js";

const app = express();
app.use(cors());
app.use(json());

dotenv.config();

// routes
app.use(userRouter);
app.use(videosRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
