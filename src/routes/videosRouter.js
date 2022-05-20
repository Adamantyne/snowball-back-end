import { Router } from "express";
import { getVideos, getVideo } from "../controllers/videosController.js";

import { validateVideoId } from "../middlewares/videosMiddleware.js";

const videosRouter = Router();

videosRouter.get("/videos", getVideos);

videosRouter.get("/videos/:id", validateVideoId, getVideo);

export default videosRouter;
