import {Router} from "express";
import {deletePublication,getAllPublicationByUserId,getPublication,getPublications,updatePublication } from "../controllers/publication.js"
import multer from "multer";

//aca estan todas las rutas menos la POST

const postRoutes = Router();
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });


postRoutes.get("/",getPublications);
postRoutes.get("/:id", getPublication);
postRoutes.get("/userPosts/:id", getAllPublicationByUserId);
// postRoutes.post("/upload", upload.single("testImage") , postPublication);
postRoutes.put("/:id",updatePublication);
postRoutes.delete("/deletePost/:id", deletePublication);

export default postRoutes