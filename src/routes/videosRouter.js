import { Router } from "express";
import { getVideos, getVideo, createVideo, createQuestion } from "../controllers/videosController.js";

import { validateVideoId, validateVideo, validateQuestion } from "../middlewares/videosMiddleware.js";

const videosRouter = Router();

videosRouter.get("/videos", getVideos);

videosRouter.get("/videos/:id", validateVideoId, getVideo);

videosRouter.post("/videos", validateVideo, createVideo);

videosRouter.put("/videos/:id", validateVideoId, validateQuestion, createQuestion);

export default videosRouter;
