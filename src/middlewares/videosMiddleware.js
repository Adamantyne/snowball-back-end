import db from "../db.js";
import { videoSchema } from "../schemas/videoSchema.js";

export async function validateVideoId(req, res, next) {
  const user = req.body;
  try {
    if(!ObjectId.isValid(id)){
        return res.status(400).send("id inválido");
    }
    const video = await db.collection("videos").findOne({_id: new ObjectId(id)});
    if(!video){
        return res.status(404).send("video não encontrado");
    }  
    res.locals.video = video;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

export async function validateVideo(req, res, next) {
    const video = req.body;
    
    try {
        await videoSchema.validateAsync(video);
        next();
    }
    catch (err) {
        console.log(err);
        res.status(422).send(err);
    }
}
