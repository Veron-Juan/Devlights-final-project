import { Router } from "express";

const aboutus = Router();

aboutus.get("/", (req, res)=>{
    console.log("aboutus!!")
    res.send("prueba de about us")
} )


export default aboutus