import { Router } from "express";

const posts = Router();

posts.get("/", (req, res) => {
  console.log("aboutus!!");
  res.send("posts de mascotas");
});

posts.post("/upload", (req, res) => {
  res.send("subir mascota perdida");
});

posts.delete("/delete:id", (req, res) => {
  res.send("subir mascota perdida");
});

posts.put("/update:id", (req, res) => {
  res.send("actualizar datos de tu mascota");
});

export default posts;
