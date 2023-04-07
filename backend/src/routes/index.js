import { Router }  from "express";
import userRoutes from "./user.js"
import authRouter from "./auth.js";
import router from "./publications.js";
import postRoutes from "./publications2.js";
import updateRouter from "./updatePub.js";

const routes = Router()


routes.use("/users", userRoutes)
routes.use("/auth", authRouter)
routes.use("/posts", router)
routes.use("/updatePub", updateRouter)
routes.use("/posts2", postRoutes)

export default routes



