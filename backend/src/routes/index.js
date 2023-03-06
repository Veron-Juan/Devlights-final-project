import { Router }  from "express";
import userRoutes from "./user.js"
import authRouter from "./auth.js";
import router from "./publications.js";

const routes = Router()


routes.use("/users", userRoutes)
routes.use("/auth", authRouter)
routes.use("/posts", router)



export default routes



// import { Router }  from "express";
// import aboutus from "./aboutus.js"
// import posts from "./posts.js"

// const routes = Router()

// routes.use("/aboutus", aboutus)
// routes.use("/posts", posts)
// // routes.use("/upload", posts)
// // routes.use("/:id", posts)
// // routes.use("/update:id", posts)

// export default routes



