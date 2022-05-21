import db from "../db.js";

export async function getVideos(req, res) {
  try {
    const videos = await db.collection("videos").find().toArray();
    res.json(videos);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
}

export async function getVideo(req, res) {
    res.json(res.locals.video);
}

export async function createVideo(req, res) {
    const video = req.body;
    try {
        await db.collection("videos").insertOne({...video, questions: []});
        res.sendStatus(201);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
}

export async function createQuestion(req, res) {
    const {question, answer, email} = req.body;
    try {
        await db.collection("videos").updateOne({link: res.locals.video.link},{$push: {questions: {question, answer, email}}});
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}