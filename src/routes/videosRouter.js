import { Router } from "express";
import { getVideos, getVideo } from "../controllers/videosController.js";

import { validateVideoId, validateVideo, createVideo} from "../middlewares/videosMiddleware.js";

const videosRouter = Router();

videosRouter.get("/videos", getVideos);

videosRouter.get("/videos/:id", validateVideoId, getVideo);

videosRouter.post("/videos", validateVideo, createVideo);

videosRouter.put("/videos", (req,res=>{
    const {video,question,email} = req.body;
    try {
        const collection = db.collection("videos");
        await collection.updateOne(video._id,{$set:{
            questions:[...video.questions,{
                question,
                answer,
                email
            }]
        }});
    } catch (error) {
        console.log("Error logging out.");
        console.log(error);
        return res.sendStatus(500);
    }
}));

export default videosRouter;
