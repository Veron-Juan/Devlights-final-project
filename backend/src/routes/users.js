import {Router} from "express";
import Login from "../../../frontend/src/components/Login/LoginForm";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser, login } from "../controller/users";
import { loginCont } from "../controllers/user";

const userRoutes = Router();

userRoutes.get("/",getAllUsers);
userRoutes.get("/:userId", getUserById);
userRoutes.post("/",createUser);
userRoutes.post("/",updateUser);
userRoutes.delete("/:userId", deleteUser);
userRoutes.post("/login", loginCont)


export default userRoutes;