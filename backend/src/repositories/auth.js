import UserModel from "../schema/user/user.js";
import { encrypt, verified } from "../utils/bcrypt.handle.js";
import { generateToken } from "../utils/jwt.handle.js";

const registerNewUser = async({
    name,
    lastname,
    email,
    password,
}) =>{
    //compruebo si ya existe un usuario con ese email
    const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREDY_USER";
  //encripto la contraseña
  const passHash = await encrypt(password)
    const registerUser = await UserModel.create({
        name,
        lastname,
        email,
        password: passHash
    })

    return registerUser
};

const loginUser = async({email, password})=>{
    //checkIs nos devuelve todo el objeto del usuario
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "NOT_FOUND_USER";
    // password encriptada de la base de datos
    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash)

    if(!isCorrect) return "PASSWORD_INCORRECT"

    const token = generateToken(checkIs.email);
    const data = {
        token,
        user:checkIs
    }
    return data

}



export {registerNewUser, loginUser}