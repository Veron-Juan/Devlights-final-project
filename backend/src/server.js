import express, { Router } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import bodyParser from "body-parser";
//routes juan publications
// import router from "./routes/publications.js";

//routes index user
import routes from "./routes/index.js";


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use("/api", routes)


app.get("/", (req, res) => {
  res.send("Hello World!");
});


mongoose
  .connect("mongodb+srv://lucas:VHNEv1rlAU5DJZr4@cluster0.3ux45gn.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Conected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(4000, () => console.log("server ok"));
