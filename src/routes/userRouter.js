import { Router } from "express";

import {getUser,createUser} from "../controllers/userController.js";
import { validateUser, verifyUser } from "../middlewares/userMiddleware.js"

const userRouter = Router();

userRouter.get("/users/:id",getUser);
userRouter.post("/users", validateUser, verifyUser, createUser);

export default userRouter;
