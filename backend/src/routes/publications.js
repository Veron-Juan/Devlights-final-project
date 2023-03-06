import { Router } from "express";
import PostModel from "../schema/publication/publication.js";
import multer from "multer";
import fs from "fs"

const router = Router()


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

  router.post("/postprueba", upload.single("testImage"), async (req, res) => {
    const saveImage =  PostModel({
      name: req.body.name,
      img: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      },
      contact: req.body.contact,
      location: req.body.location
    });

    await saveImage.save()
    // const image = saveImage.img.data.toString('base64');
    const image = saveImage.img.data.toString("base64")
    const contentType = saveImage.contentType;
    res.json({ image, contentType });
    
  });

router.get('/getprueba',async (req,res)=>{
    const allData = await PostModel.find()
    res.json(allData)
})

export default router