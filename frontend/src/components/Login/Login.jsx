import React, { useState } from "react";
import backgFormLogo from "../../assets/backgLogin1.png";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("https://devlights-final-project-production.up.railway.app/api/auth/login", input);
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

  return (
    <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <img
          src={backgFormLogo}
          alt="Background Form's Logo"
          className="hidden lg:block h-[90%]"
        />
        <form
          id=""
          action=""
          method=""
          onSubmit={handleSubmit}
          className="container max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 bg-white border-none rounded-2xl shadow-xl py-5 lg:w-[32rem]"
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
              required 
              onChange={handleChange}
              value={input.email}
            />
          </div>

          {/* Pass */}
          <div className="relative z-0 w-full mb-6 group">
            <input 
              type="password"
              name="password"
              id="password" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-200 appearance-none dark:text-dark dark:border-yellow-200 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer" 
              placeholder="" 
              onChange={handleChange}
              value={input.password}
              required
            />
            <label 
              htmlFor="password" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >
                Contraseña
            </label>
          </div>


          <div className="flex flex-col mt-12 justify-center items-center">
            <input
            type="submit"
            value="Iniciar Sesión"
              onClick={handleSubmit}
              className="bg-yellow-HomeButtton h-[40px] rounded-xl w-[50%] mb-2 font-bold cursor-pointer mx-auto my-auto flex justify-center "
            /> 
            <span className="flex justify-center">
              Aun no tienes una cuenta?{" "}
              <Link to="/registrarse" className="ml-1 hover:text-amber-300">
                Registrate
              </Link>
            </span>

          </div>
        </form>

      </div>
    </div>
  );
    // <div className="flex justify-center bg-cover backdrop-filter transparent backdrop-blur-sm bg-opacity-30 mt-40 p-8 px-8 ">
    //   <div className="grid grid-cols-1 sm:grid-cols-2">
    //     <img
    //       className="w-full h-full object-cover flex justify-center"
    //       src={Log2}
    //       alt=""
    //     />
    //     <form onSubmit={handleLogin} className="w-[80%] mx-auto bg-white rounded-lg">
    //       <h2 className="flex justify-center text-3xl font-bold border-b-4 pb-[7px] border-b-yellow-200 py-2 w-[80%]">
    //         SIGN IN
    //       </h2>

    //       <div className="border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 py-2 w-[80%]">
    //         <label htmlFor="name" className="font-[Monserrat] mt-[10px]">
    //           Email
    //         </label>
    //         <input
    //           name="email"
    //           id="email"
    //           value={state.email}
    //           onChange={handleInputChange}
    //           className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%] "
    //         ></input>
    //       </div>
    //       <div className="border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 py-2  w-[80%] ">
    //         <label htmlFor="password" className="font-[Monserrat] mt-[10px]">
    //           Password
    //         </label>
    //         <input
    //           name="password"
    //           id="password"
    //           value={state.password}
    //           onChange={handleInputChange}
    //           className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%]"
    //         ></input>
    //       </div>

    //       {/* <div className='flex justify-between text-gray-400 py-2 w-[80%]'>
    //     <p className='flex items center'> 
    //     <input className='mr-2' type="checkbox" />Remember Me</p>
    //     <p >Forgot Password</p>
    //     </div> */}

    //       <div>
    //         <button
    //           type="submit"
    //           id="submit-button"
    //           className="my-5 py-2 flex justify-center  bg-yellow  rounded-xl w-[80%]"
    //         >
    //           Sign In
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>

}
