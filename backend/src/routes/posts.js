import { Router } from "express";


const posts = Router();

posts.get("/", (req, res) => {
  console.log("aboutus!!");
  res.send("posts de mascotas");
});

posts.post("/upload", (req, res) => {
  // const image = new PostModel
  // image.name = req.body.name
  // image.contact = req.body.contact
  // image.description = req.body.description
  // image.filename = req.body.filename
  // image.path = req.body.path
  
  res.send({data:"enviar un archivo"});
});

posts.delete("/delete:id", (req, res) => {
  res.send("subir mascota perdida");
});

posts.put("/update:id", (req, res) => {
  res.send("actualizar datos de tu mascota");
});

export default posts;
