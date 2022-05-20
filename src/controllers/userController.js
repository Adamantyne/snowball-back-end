import db from "../db.js";

export async function createUser(req, res) {
  const user = req.body;

  try {
    if (res.locals.user.name) {
      res.status(200).send(res.locals.user._id);
    } else {
      await db.collection("users").insertOne(user);
      const userId = await db
        .collection("users")
        .findOne({ email: user.email });
      res.status(200).send(userId);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
