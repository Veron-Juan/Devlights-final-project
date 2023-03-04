import { Router }  from "express";
import aboutus from "./aboutus.js"
import posts from "./posts.js"
import userRoutes from "./users.js"


const routes = Router()

routes.use("/aboutus", aboutus)
routes.use("/users", userRoutes)
routes.use("/posts", posts)
// routes.use("/upload", posts)
// routes.use("/:id", posts)
// routes.use("/update:id", posts)

export default routes



