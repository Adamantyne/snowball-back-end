import { Router } from "express";
import { createUser } from "../controllers/Controller.js";

import { validateUser, verifyUser } from "../middlewares/Middleware.js";

const userRouter = Router();

userRouter.post("/users", validateUser, verifyUser, createUser);

export default userRouter;
