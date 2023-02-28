import  express, { Router }  from "express"
import cors from "cors"
import mongoose from "mongoose"
import routes from "./routes/index.js"


const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", routes)

app.get("/", (req, res) => {
    res.send("Hello World!");
  });

app.use("/posts", (req, res) => {
    res.send("perros perdidos");
})

// mongoose.connect("mongodb://127.0.0.1:27017/db_mongo", (error) => {
//   if (error) {
//     console.log("Hubo un error en la conexion a MongoDB", error);
//   } else {
//     console.log("Conexion exitosa con MongoDB");
//   }
// })

app.listen(4000, ()=> console.log("server ok"))




