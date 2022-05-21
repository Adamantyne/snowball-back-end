import db from "../db.js";
import { ObjectId } from "mongodb";
import { videoSchema } from "../schemas/videoSchema.js";
import { questionSchema } from "../schemas/questionSchema.js"

export async function validateVideoId(req, res, next) {
  const {id} = req.params;
  try {
    if(!ObjectId.isValid(id)){
        return res.status(400).send("id inválido");
    }
    const videoFromDb = await db.collection("videos").findOne({_id: new ObjectId(id)});
    if(!videoFromDb){
        return res.status(404).send("video não encontrado");
    }  
    res.locals.video = videoFromDb;
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
        const videoFromDb = await db.collection("videos").findOne({link: video.link});
        if(videoFromDb){
            return res.status(400).send("video já cadastrado");
        }
        next();
    }
    catch (err) {
        console.log(err);
        res.status(422).send(err);
    }
}

export async function validateQuestion(req, res, next) {
    const question = req.body;
    try {
        await questionSchema.validateAsync(question);
        next();
    }
    catch (err) {
        console.log(err);
        res.status(422).send(err);
    }
}
