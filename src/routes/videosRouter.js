import { Router } from "express";
import { getVideos, getVideo } from "../controllers/videosController.js";

import { validateVideoId, validateVideo, createVideo} from "../middlewares/videosMiddleware.js";

const videosRouter = Router();

videosRouter.get("/videos", getVideos);

videosRouter.get("/videos/:id", validateVideoId, getVideo);

videosRouter.post("/videos", validateVideo, createVideo);



export default videosRouter;
