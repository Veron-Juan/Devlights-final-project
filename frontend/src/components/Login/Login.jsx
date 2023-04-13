import React, {useEffect, useState } from "react";
import backgFormLogo from "../../assets/backgLogin1.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../redux/states/user";

import axios from "axios";

//TODO: ARREGLAR VISUALMENTE, CAMBIAR FOTO POR UNA DE BUENA CALIDAD 

export default function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const initialState = {
    email: "",
    password: "",
  };

  const [input, setInput] = useState(initialState);
  const [formErrosrs, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(e) {
    console.log(e.target);
    const{name,value}=e.target;
    setInput({ ...input, [name]:value});
     console.log(input);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormErrors(validate(formErrosrs));
    setIsSubmit (true);
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", input);
      const userData = res.data;
      const { user, token } = userData;

      console.log("user",user);
      console.log("token",token);
      dispatch(addUser({ ...user }));
      navigate(`/`, { replace: true });
    } catch (error) {
      console.log(error);
    }

    setInput(initialState);
  };


  useEffect(() => {
    console.log(formErrosrs);
     if (Object.keys(formErrosrs).length===0 && isSubmit){
      console.log(input);
     }
   }, [formErrosrs]);
  

  const validate = (values)=> {
   const errors={};
  //  const regex= "/^[^\s@]+@[^\s@]+\.[^\s@]{2, }$/i";
  
   if(!values.email){
    errors.email="Email es required!";
  //  }else if (!regex.email) {
  //   errors.email="This es not a valid email format!";
    }  
  if(!values.password){
   errors.password="Password es required!";
  }else if (values.password.length < 4){
    errors.password="Password must be more than 4 characters!";
  }else if (values.password.length > 10){
    errors.password="Password can not exceed more than 4 characters!";
  }
 return errors;
  };
  

  return (
    <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <img
          src={backgFormLogo}
          alt="Background Form's Logo"
          className="hidden lg:block h-[90%]"
        />
        <form
        className="container max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 bg-white border-none rounded-2xl shadow-xl py-5 lg:w-[32rem]"
          id=""
          action=""
          method=""
          onSubmit={handleSubmit}          
        >
          <h1 className="flex flex-row justify-center items-center text-xl md:text-3xl font-bold text-center mb-[30px] w-auto">
            Únete a nosotros!
          </h1>
      
          {/* Correo */}
          <div className="relative z-0 w-full mb-6 group ">
          <label 
              htmlFor="email" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Correo electrónico
            </label>
            <input 
              type="email"
              name="email"
              id="email" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-200 appearance-none dark:text-dark dark:border-yellow-200 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
              placeholder=""              
              value={input.email}
              onChange={handleChange}             
            />
          </div>
          <p className="text-red-600 font-[Monserrat]">{formErrosrs.email}</p>
          {/* Pass */}
          <div className="relative z-0 w-full mb-6 group">
            <input 
              type="password"
              name="password"
              id="password" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-200 appearance-none dark:text-dark dark:border-yellow-200 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer" 
              placeholder="" 
              value={input.password}
              onChange={handleChange}             
              required
            />
            <label 
              htmlFor="password" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >
                Contraseña
            </label>
          </div>
          <p className="text-red-600 font-[Monserrat]">{formErrosrs.email}</p>

          <div className="flex flex-col mt-12 justify-center items-center">
            <button
              type="submit"
              id="submit-button"
              className="bg-yellow h-[40px] rounded-xl w-[50%] mb-6 font-bold"
            >
              Iniciar Sesión
            </button>
            <span className="flex justify-center">
              Aun no tienes una cuenta?{" "}
              <a href="/register" className="hover:text-amber-300">
                Registrate
              </a>
            </span>

          </div>
        </form>

      </div>
    </div>
  );
   
}
