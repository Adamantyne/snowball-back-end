import {Router} from "express";

import getUser from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/users/:id",getUser);

export default userRouter;