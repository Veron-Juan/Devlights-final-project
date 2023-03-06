import {Router} from "express";
import {  deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.js";

const userRoutes = Router();

userRoutes.get("/",getAllUsers);
userRoutes.get("/:id", getUserById);
userRoutes.put("/",updateUser);
userRoutes.delete("/:userId", deleteUser);


export default userRoutes;




























// import { Router } from "express";
// import UserModel from "../schema/user/user";

// const router = Router()

// router.get("/users", async (req, res)=>{
//     try{
//         const response = await UserModel.find({})
//         res.send(response)

//     }  catch (error) {
//         res.status(500).json({ error })
//       }
// })

// router.get("user", async (req, res)=>{
//     try{
//         const { id } = req.params
//         const user = await UserModel.findOne({_id: id});
//         const data = user ? user : "NOT_FOUND"
//         res.send(data)
        
//         // const { id } = req.params;
//         // const response = await getUserService(id);
//         // const data = response ? response : "NOT_FOUND"
//         // res.send(data)

//     } catch (error) {
//         res.status(500).json({ error })
//       }
// })


// router.post("/register", async (req, res)=>{
//     const data = req.body;


// })

// const registrerNewUserService = async ({
//     email,
//     password,
//     username,
//     avatar,
//   }: User) => {
//     const checkIs = await UserModel.findOne({ email });
//     if (checkIs) return "ALREDY_USER";
//     const passHash = await encrypt(password);
  
//     const registrerNewUser = await UserModel.create({
//       email,
//       password: passHash,
//       username,
//       avatar,
//     });
  
//     return registrerNewUser;
//   };
