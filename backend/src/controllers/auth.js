import { loginUser, registerNewUser } from "../repositories/auth.js";

const registerCtrl = async (req, res) => {
    const {body} = req
    const responseUser = await registerNewUser(body);
    res.send(responseUser);
  };


const loginCtrl = async (req, res)=>{
  const {email,password} = req.body
  const responseUser = await loginUser({email,password})

  if(responseUser === "PASSWORD_INCORRECT"){
    res.status(403)
    res.send(responseUser)
  } else{
    res.send(responseUser)

  }

}


  export {registerCtrl, loginCtrl}

  