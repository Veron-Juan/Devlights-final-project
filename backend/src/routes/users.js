import {Router} from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controller/users";

///////////////////////ELIMINAR



const userRoutes = Router();

userRoutes.get("/",getAllUsers);
userRoutes.get("/:userId", getUserById);
userRoutes.post("/",createUser);
userRoutes.post("/",updateUser);
userRoutes.delete("/:userId", deleteUser);


export default userRoutes;