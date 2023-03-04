import { Router} from "express";
import { deletePublication,  getPublications, updatePublication} from "../controllers/publication.js";
import multer from "multer";
import fs from "fs"

const router = Router()

router.get('/', getPublications)

// router.get('/:id', getPublication)

router.put('/:id', updatePublication)

router.delete('/:id', deletePublication)


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/postprueba", upload.single("testImage"), (req, res) => {
  const saveImage =  PostModel({
    name: req.body.name,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
    res.send('image is saved')
});



export {router}









// const posts = Router();

// posts.get("/", (req, res) => {
//   console.log("aboutus!!");
//   res.send("posts de mascotas");
// });

// posts.post("/upload", (req, res) => {
//   // const image = new PostModel
//   // image.name = req.body.name
//   // image.contact = req.body.contact
//   // image.description = req.body.description
//   // image.filename = req.body.filename
//   // image.path = req.body.path
  
//   res.send({data:"enviar un archivo"});
// });

// posts.delete("/delete:id", (req, res) => {
//   res.send("subir mascota perdida");
// });

// posts.put("/update:id", (req, res) => {
//   res.send("actualizar datos de tu mascota");
// });

// export default posts;
