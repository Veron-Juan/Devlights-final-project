import PostModel from "../schema/publication/publication.js"
import multer from "multer";
import fs from "fs"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  app.post("/postprueba", upload.single("testImage"), (req, res) => {
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



// const createPublicationService = async (body)=>{
//     const responsePublication = await PostModel.create(body)
//     return responsePublication
// }

const getPublicationsService = async ()=>{
    const responsePublications = await PostModel.find({})
    return responsePublications
}

const getPublicationService = async (id)=>{
    const responsePublication = await PostModel.findOne({_id: id})
    return responsePublication
}

// //el id es el query, la condicion de búsqueda, el segundo argumento es la data q vamos a actualizar
// // el tercer argumento nos devuelve la data actualizada
const updatePublicationService = async (id, data) =>{
    const responsePublication = await PostModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
    })
    return responsePublication
}

const deletePublicationService = async (id) =>{
    const responsePublication = await PostModel.remove({ _id : id })
    return responsePublication
}


export { getPublicationsService, getPublicationService, updatePublicationService, deletePublicationService}