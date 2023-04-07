import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../redux/states/user";
import backgFormLogo from "../../assets/backgRegister.png";
import * as servicePosts from "../../services/postService";

// Formulario de registro que solicita: Nombre y apellido, email y contraseña

function Register() {
  const initialState = {
    name: "",
    lastname: "",
    email: "",
    password: "",
  };

  //seteamos los valores iniciales de los form's inputs
  const [inputValues, setInputValue] = useState(initialState);
  const [formErrosrs, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  

  //handle submit updates
  function handleChange(e) {
    console.log(e.target);
    const{name,value}=e.target;
    setInputValue({ ...inputValues, [name]:value});
     console.log(inputValues);
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formErrosrs));
    setIsSubmit (true);
    //  const res = await fetch("http://localhost:4000/api/auth/register", {
    //   method: "POST",
    //    headers: {
    //      "Content-Type": "application/json",
    //    },
    //    body: JSON.stringify(inputValues),
    //  });
    //  try {
    //    console.log(res);
    //    dispatch(addUser({ ...inputValues }));
    //    navigate(`/`, { replace: true });
    //  } catch (error) {
    //    console.log(error);
    //  };
    // };
     const register = async () => {
       const res = await servicePosts.registerUser(inputValues);
       try{
         console.log(res.data);
         dispatch(addUser({ ...inputValues }));
         navigate(`/`, { replace: true });
       } catch(error){
         console.log(error)
       }
     }
     register()
    };
    
    useEffect(() => {
      console.log(formErrosrs);
       if (Object.keys(formErrosrs).length===0 && isSubmit){
        console.log(inputValues);
       }
     }, [formErrosrs]);
    
  
    const validate = (values)=> {
     const errors={};
     const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2, }$/i;
     if(!values.name){
      errors.name="Name es required!";
     }
     if(!values.lastname){
      errors.lastname="Lastname es required!";
     }
     if(!values.email){
      errors.email="Email es required!";
     }else if (!regex.test(values.email)) {
      errors.email="This es not a valid email format!";
     }  
    if(!values.password){
     errors.password="Password es required!";
    }else if (values.password.length < 4){
      errors.password="Password must be more than 4 characters!";
    }else if (values.password.length > 10){
      errors.password="Password must be more than 4 characters!";
    }
    if(!values.confirmPassword){
      errors.confirmPassword="Password cannot exceed more than 10 characters!";
     } else if (values.password!== values.confirmPassword ) {
      errors.confirmPassword = "Password does not match confirmation password";
     }
   return errors;
    };
    
  

  // Return del componente main Registro

  return (
    <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* {Object.keys(formErrosrs).length===0 && isSubmit ? (
            <div className="ui massage success">REGISTER IN SUCCESSFULLY </div>) :(
              <pre>{JSON.stringify(input,undefined,2)}</pre>
            )} */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      
       <form
        className="container max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 bg-white border-none rounded-2xl shadow-xl py-5 lg:w-[32rem]"
          id="registrationForm"
          action="/"
          method="POST"
          onSubmit={handleSubmit}>
          <h1 className="flex flex-row justify-center items-center text-xl md:text-3xl font-bold text-center mb-[30px] w-auto">
            Únete a nosotros!
          </h1>

          {/* Nombre */}
          <div class="relative z-0 w-full mb-6 group">
            <input 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-200 appearance-none dark:text-dark dark:border-yellow-200 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer" 
              type="text"
              name="name"
              id="name" 
              placeholder=""              
              value={inputValues.name}
              onChange={handleChange}/>
            <label 
              htmlFor="name" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >Nombre
            </label>        
          </div>
          <p className="text-red-600 font-[Monserrat]">{formErrosrs.name}</p>
          {/* Apellido */}
          <div class="relative z-0 w-full mb-6 group">
            <input 
             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-200 appearance-none dark:text-dark dark:border-yellow-200 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer" 
              type="text"
              name="lastname"
              id="lName"              
              placeholder="" 
              required 
              value={inputValues.lastname}
              onChange={handleChange}/>
            <label 
              htmlFor="lName" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              > Apellido
            </label>           
          </div>
          <p className="text-red-600 font-[Monserrat]">{formErrosrs.lastname}</p>
          {/* Correo */}
          <div class="relative z-0 w-full mb-6 group">
            <input 
             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-200 appearance-none dark:text-dark dark:border-yellow-200 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
              type="email"
              name="email"
              id="email"              
              placeholder="" 
              required 
              value={inputValues.email}
              onChange={handleChange}/>
            <label 
              htmlFor="email" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >Correo electrónico
            </label>           
          </div>
          <p className="text-red-600 font-[Monserrat]">{formErrosrs.email}</p>
          {/* Pass */}
          <div class="relative z-0 w-full mb-6 group">
            <input 
             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-200 appearance-none dark:text-dark dark:border-yellow-200 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer" 
              type="password"
              name="password"
              id="password"              
              placeholder="" 
              value={inputValues.password}
              onChange={handleChange} />
            <label 
              htmlFor="password" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >Contraseña
            </label>           
          </div>
          <p className="text-red-600 font-[Monserrat]">{formErrosrs.password}</p>
          {/* Re-Pass */}
          <div class="relative z-0 w-full mb-6 group">
            <input 
             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-200 appearance-none dark:text-dark dark:border-yellow-200 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer" 
              type="password"
              name="confirmPassword"
              id="confirmPassword"              
              placeholder="" 
              value={inputValues.confirmPassword}
              onChange={(e) => handleChange(e)}/>
            <label 
              htmlFor="confirmPassword" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >Repetir Contraseña
            </label>           
          </div>
          <p className="text-red-600 font-[Monserrat]">{formErrosrs.confirmPassword}</p>
          <div className="flex flex-col mt-12 justify-center items-center">
            <button
              type="submit"
              id="submit-button"
              className="bg-yellow h-[40px] rounded-xl w-[50%] mb-6 font-bold"
            >Registrarse
            </button>
            <span className="flex justify-center">
              Ya tienes una cuenta?{" "}
              <a href="/login" className="hover:text-amber-300">
                Ingresar
              </a>
            </span>

          </div>
        </form>
        <img
          src={backgFormLogo}
          alt="Background Form's Logo"
          className="hidden lg:block"
        />
      </div>
    </div>
  );
}
export default Register;
