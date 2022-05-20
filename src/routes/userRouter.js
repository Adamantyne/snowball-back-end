import { Router } from "express";
import { createUser } from "../controllers/userController.js";

import { validateUser, verifyUser } from "../middlewares/userMiddleware.js";

const userRouter = Router();

userRouter.post("/users", validateUser, verifyUser, createUser);

export default userRouter;
