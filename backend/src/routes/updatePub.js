import { Router } from "express";
import PostModel from "../schema/publication/publication.js";
import multer from "multer";
/////////////////////////////////////////////////////////////////
//acá se encuentran las rutas para hacer la petición PUT de la publicació, a travez de multer
const updateRouter = Router()
const storage = multer.memoryStorage();
const update = multer({ storage: storage,
  dest: 'uploads/',
  storage: multer.memoryStorage()
 });

  updateRouter.put("/update/:id", update.single("testImage"), async (req, res) => {
    console.log(req.file, req.body.name);
    const saveImage =  PostModel.updateOne({_id: req.params},{$set:{
      name: req.body.name,
      img: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      },
      contact: req.body.contact,
      location: req.body.location,
      description: req.body.description,
      petType: req.body.petType,
      user_id: req.body.user_id,
      nameUser: req.body.nameUser,
      lastnameUser: req.body.lastnameUser,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    }});
    

    await saveImage.save()
    // const image = saveImage.img.data.toString('base64');
    const image = saveImage.img.data.toString("base64")
    const contentType = saveImage.contentType;
    res.json({ image, contentType });
    
  });

export default updateRouter