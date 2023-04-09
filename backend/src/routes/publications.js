import { Router } from "express";
import PostModel from "../schema/publication/publication.js";
import multer from "multer";
import fs from "fs";
/////////////////////////////////////////////////////////////////
//acá se encuentran las rutas para hacer la petición POST de la publicació, a travez de multer
//también se puede encontrar la de obtencion de post
const router = Router()
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload", upload.single("testImage"), async (req, res) => {
  console.log(req.file, req.body.name);
  const saveImage = PostModel({
    name: req.body.name,
    img: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },
    contact: req.body.contact,
    location: req.body.location,
    petType: req.body.petType,
    description: req.body.description,
    nameUser: req.body.nameUser,
    lastnameUser: req.body.lastnameUser,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  });

  await saveImage.save();
  // const image = saveImage.img.data.toString('base64');
  const image = saveImage.img.data.toString("base64");
  const contentType = saveImage.contentType;
  res.json({ image, contentType });
});

router.get("/", async (req, res) => {
  const allData = await PostModel.find();
  res.json(allData);
});

export default router;
