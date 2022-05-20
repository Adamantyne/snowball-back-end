import db from "../db.js";

export async function getVideos(req, res) {
  try {
    const videos = await db.videos.findAll();
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
        await db.videos.create({...video, questions: []});
        res.sendStatus(201);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
}
