import { ObjectId } from "mongodb";

import db from "../db.js";

export default async function getUser(req,res){
    const {id}= req.params;
    try {
        if(!ObjectId.isValid(id)){
            return res.status(404).send("id de usuário inválido");
        }
        const collection = db.collection("users");
        const user = await collection.findOne({_id: new ObjectId(id)});
        console.log(user)
        if(!user){
            return res.status(404).send("usuário não cadastrado");
        }
        res.send(user);
    } catch (error) {
        console.log("Error logging out.");
        console.log(error);
        return res.sendStatus(500);
    }
}