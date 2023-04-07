import {Router} from "express";
import {deletePublication,getPublication,getPublications,updatePublication,getLocations } from "../controllers/publication.js"
import multer from "multer";

//aca estan todas las rutas menos la POST

const postRoutes = Router();
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });


postRoutes.get("/locations",getLocations);
postRoutes.get("/",getPublications);
postRoutes.get("/:id", getPublication);
// postRoutes.post("/upload", upload.single("testImage") , postPublication);
postRoutes.put("/:id",updatePublication);
postRoutes.delete("/:id", deletePublication);

export default postRoutes