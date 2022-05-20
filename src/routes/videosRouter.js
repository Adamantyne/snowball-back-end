import { Router } from "express";
import { getVideos, getVideo, createVideo } from "../controllers/videosController.js";

import { validateVideoId, validateVideo } from "../middlewares/videosMiddleware.js";

const videosRouter = Router();

videosRouter.get("/videos", getVideos);

videosRouter.get("/videos/:id", validateVideoId, getVideo);

videosRouter.post("/videos", validateVideo, createVideo);



export default videosRouter;
