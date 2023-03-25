import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserService, loginUser } from "../../services/users";
import Log2 from "../../assets/perro.jpg";
import Home from '../../pages/home/Home';
import Login from "../../components/Login/LoginForm";
import backgFormLogo from "../../assets/backgForm.png";

export default function RegisterForm() {
  const [name, setName] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRePassword] = useState();
  const navigate = useNavigate();
  // const[shadowData, setShowData] = useState(false);

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onLnameChange(event) {
    setLname(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }
  function onRePasswordChange(event) {
    setRePassword(event.target.value);
  }

  async function onFormSubmit(event) {
    event.preventDefault();
    if(password===repassword){
      // alert("La contraseña  coincide")
      const user = await createUserService({
        name,
        lname,
        email,
        password,
        repassword
      })
      
    navigate("/");
      console.log ("user created", user);
    }else{
      alert("Las cantraseña no coinciden");
    }
     
    // console.log("name",name)
    // console.log("lname",lname)
    // console.log("email",email)
    // console.log("password",password)
    // console.log("repassword",repassword)
    //   setShowData(true);

    // aca va a repository
      // try {
      //   await loginUser({ email, password });
      
      //   navigate("/");
      // } catch (error) {
      // console.log("hubo un error", error);
      // }
  }



  return (
  <div className='flex justify-center bg-cover backdrop-filter transparent backdrop-blur-sm bg-opacity-30 mt-40 p-8 px-8 '>
    <div id="img_log2" className='grid grid-cols-1 sm:grid-cols-2' >
    <img
      className='w-full h-full object-cover flex justify-center' src={Log2} alt=""/>

     <form   id="form_login" className='w-[80%] mx-auto bg-white rounded-lg'
       onSubmit={onFormSubmit}>
        <h1 className="flex flex-row justify-center items-center text-5xl font-bold text-center mb-[30px] w-auto">
          Únete a nosotros!
        </h1>
        <div className="flex flex-col justify-center border-b-4 border-b-yellow-200 focus-within:border-yellow-400">
          <label htmlFor="name" className="font-[Monserrat] mt-[8px] font-bold">
          Nombre
         <input className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%] "
         id="name_id" 
          name="name" 
          type="text"
          placeholder='Name' 
          onChange={onNameChange} >
         </input>
         </label>
         </div>

       <div className="flex flex-col justify-center border-b-4 border-b-yellow-200 focus-within:border-yellow-400">
          <label htmlFor="lname" className="font-[Monserrat] mt-[8px] font-bold">
          Apellido
         <input className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%] "
         id="lname_id" 
          name="lname"
          type="text"
          placeholder='Apellido' 
          onChange={onLnameChange} >
         </input>
         </label>
       </div>

       <div className="border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 py-2  w-[80%] ">
       <label htmlFor="password" className="font-[Monserrat] mt-[10px]">Password
        <input className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%]"
         id="password"
         name="password" 
         type="password"
         placeholder='Constraseña'
         onChange={onPasswordChange}>
          </input> 
          </label>      
        </div>

        
        <div className="border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 py-2  w-[80%] ">
       <label htmlFor="repassword" className="font-[Monserrat] mt-[10px]">Confirme Password
        <input className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%]"
         id="repassword"
         name="repassword" 
         type="password"
         placeholder='Confirme Constraseña'
         onChange={onRePasswordChange}>
          </input> 
          </label>      
        </div>
        
        <div>
         <button
            className="my-5 py-2 flex justify-center  bg-yellow  rounded-xl w-[80%]"
            type="submit"
            id="submit-button"
            value="Register"
          
            >Register
          </button>
         
            <div className='flex justify-between text-gray-400 py-2 w-[80%]'>
             <p className='flex items center'> 
              Acceder a tu cuenta?{" "}
             </p>

             <p ><a href="/Login" className="hover:text-amber-300">
             cuenta
             </a></p>
            </div>
        </div>
      </form>
      </div>
  </div>
    
  )
}
