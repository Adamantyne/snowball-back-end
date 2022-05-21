import { ObjectId } from "mongodb";

import db from "../db.js";

export async function getUser(req,res){
    const {id}= req.params;
    try {
        if(!ObjectId.isValid(id)){
            return res.status(404).send("id de usuário inválido");
        }
        const collection = db.collection("users");
        const user = await collection.findOne({_id: new ObjectId(id)});
        if(!user){
            return res.status(404).send("usuário não cadastrado");
        }
        res.send(user);
    } catch (error) {
        console.log("Error logging out.");
        console.log(error);
        res.status(500).send(err);
    }
}

export async function createUser(req, res) {
  const user = req.body;

  try {
    if (res.locals.user) {
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
