// import express from "express";
// import { LogIn, logOut, signUP } from "../controllers/auth.controllers.js";

// const authRouter = express.Router()

// authRouter.post("/signup",signUP)
// authRouter.post("/signin",LogIn)
// authRouter.get("/logout",logOut)

// export default authRouter

import express from "express";
import { signup, login, logOut } from "../controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", login);
authRouter.get("/logout", logOut);

export default authRouter;
