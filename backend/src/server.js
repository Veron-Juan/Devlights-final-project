import express, { Router } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import bodyParser from "body-parser";
import router from "./routes/publications.js";



const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use("/api", router)


app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use("/posts", (req, res) => {
//   res.send("perros perdidos");
// });


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/postprueba", upload.single("testImage"), (req, res) => {
//   const saveImage =  PostModel({
//     name: req.body.name,
//     img: {
//       data: fs.readFileSync("uploads/" + req.file.filename),
//       contentType: "image/png",
//     },
//   });
//   saveImage
//     .save()
//     .then((res) => {
//       console.log("image is saved");
//     })
//     .catch((err) => {
//       console.log(err, "error has occur");
//     });
//     res.send('image is saved')
// });


// app.get('/getprueba',async (req,res)=>{
//   const allData = await PostModel.find()
//   res.json(allData)
// })


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(4000, () => console.log("server ok"));
