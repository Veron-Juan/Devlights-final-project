import { Router }  from "express";
import userRoutes from "./user.js"
import authRouter from "./auth.js";
import router from "./publications.js";
// import postRoutes from "./publications2.js";

const routes = Router()


routes.use("/users", userRoutes)
routes.use("/auth", authRouter)
routes.use("/posts", router)
// routes.use("/posts2", postRoutes)

export default routes



