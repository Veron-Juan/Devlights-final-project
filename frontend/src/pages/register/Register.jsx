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

  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //handle submit updates
  function handleChange(e) {
    setInputValue({ ...inputValues, [e.target.name]: e.target.value });
  }

  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    if (!inputValues.fName.trim()) {
      errors.fName = "First name is required";
    } else {
      errors.fName = "";
    }
    //last Name validation
    if (!inputValues.lName.trim()) {
      errors.lName = "Last name is required";
    } else {
      errors.lName = "";
    }

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    //password validation
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

    //matchPassword validation
    if (!inputValues.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (inputValues.confirmPassword !== inputValues.Password) {
      errors.confirmPassword = "Password does not match confirmation password";
    } else {
      errors.password = "";
    }

    return setValidation(errors);
  };

  // useEffect(() => {
  //   checkValidation();
  // }, [inputValues]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const register = async () => {
      const res = await servicePosts.registerUser(inputValues);
      try{
        console.log(res.data);
        dispatch(addUser({ ...inputValues }));
        navigate(`/login`, { replace: true });
      } catch(error){
        console.log(error)
      }
    }
    register()


    // const res = await fetch("http://localhost:4000/api/auth/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(inputValues),
    // });
    // try {
    //   console.log(res);
    //   dispatch(addUser({ ...inputValues }));
    //   navigate(`/`, { replace: true });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // Return del componente main Registro

  return (
    <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <form
          id="registrationForm"
          action="/"
          method="POST"
          onSubmit={handleSubmit}
          className="container max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 bg-white border-none rounded-2xl shadow-xl py-5 lg:w-[32rem]"
        >
          <h1 className="flex flex-row justify-center items-center text-xl md:text-3xl font-bold text-center mb-[30px] w-auto">
            Únete a nosotros!
          </h1>

          {/* Nombre */}
          <div className="relative z-0 w-full mb-6 group">
            <input 
              type="text"
              name="name"
              id="name" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-200 appearance-none dark:text-dark dark:border-yellow-200 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer" 
              placeholder="" 
              required 
              onChange={handleChange}
              value={inputValues.name}
            />
            <label 
              htmlFor="name" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >
                Nombre
            </label>
            {validation.name && (
                <p className="text-red-600 font-[Monserrat]">{validation.name}</p>
              )}
            {validation.name && console.log(validation)}
          </div>

          {/* Apellido */}
          <div className="relative z-0 w-full mb-6 group">
            <input 
              type="text"
              name="lastname"
              id="lName" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-200 appearance-none dark:text-dark dark:border-yellow-200 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer" 
              placeholder="" 
              required 
              onChange={handleChange}
                value={inputValues.lastname}
            />
            <label 
              htmlFor="lName" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >
                Apellido
            </label>
            {validation.lastname && (
              <p className="text-red-600 font-[Monserrat]">
                {validation.lastname}
              </p>
            )}
          </div>
      
          {/* Correo */}
          <div className="relative z-0 w-full mb-6 group">
            <input 
              type="email"
              name="email"
              id="email" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-200 appearance-none dark:text-dark dark:border-yellow-200 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
              placeholder="" 
              required 
              onChange={handleChange}
              value={inputValues.email}
            />
            <label 
              htmlFor="email" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >
                Correo electrónico
            </label>
            {validation.email && (
              <p className="text-red-600 font-[Monserrat]">
                {validation.email}
              </p>
            )}
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
              value={inputValues.password}
              required
            />
            <label 
              htmlFor="password" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >
                Contraseña
            </label>
            {validation.password && (
              <p className="text-red-600 font-[Monserrat]">
                {validation.password}
              </p>
            )}
          </div>

          {/* Re-Pass */}
          <div className="relative z-0 w-full mb-6 group">
            <input 
              type="password"
              name="confirmPassword"
              id="confirmPassword" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-yellow-200 appearance-none dark:text-dark dark:border-yellow-200 dark:focus:border-yellow-300 focus:outline-none focus:ring-0 focus:border-yellow-300 peer" 
              placeholder="" 
              onChange={(e) => handleChange(e)}
              value={inputValues.confirmPassword}
              required
            />
            <label 
              htmlFor="confirmPassword" 
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
              >
                Repetir Contraseña
            </label>
            {validation.confirmPassword && (
              <p className="text-red-600 font-[Monserrat] uppercase">
                {validation.confirmPassword}
              </p>
            )}
          </div>

          <div className="flex flex-col mt-12 justify-center items-center">
            <button
              type="submit"
              id="submit-button"
              className="bg-yellow h-[40px] rounded-xl w-[50%] mb-6 font-bold"
            >
              Registrarse
            </button>
            <div className="flex">
              <p>Ya tienes una cuenta?</p>
              <a href="/login" className="ml-3 hover:text-amber-300"> Ingresar</a>
            </div>
            

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
