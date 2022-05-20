import db from "../db.js";
import { userSchema } from "../schemas/userSchema.js";

export async function validateUser(req, res, next) {
  const user = req.body;
  try {
    await userSchema.validateAsync(user);
    next();
  } catch (err) {
    console.log(err);
    res.status(422).send(err);
  }
}

export async function verifyUser(req, res, next) {
  const user = req.body;
  try {
    const userFromDb = await db
      .collection("users")
      .findOne({ email: user.email });
    if (userFromDb) {
      res.locals.user = userFromDb;
      if (userFromDb.name !== user.name) {
        res.status(422).send("User already exist.");
      }
    }
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
