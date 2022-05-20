import {Router} from "express";
import db from "../db.js"

const authRouter = Router();

authRouter.get("/users/:id",async (req,res)=>{
    const {id}= req.params;
    try {
        const collection = db.collection("users").findOne({})
    } catch (error) {
        console.log("Error logging out.");
        console.log(error);
        return res.sendStatus(500);
    }
});