import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../redux/states.js/user";
// Formulario de registro que solicita: Nombre y apellido, email y contraseña

function Register() {

  const initialState= {
    name: "",
    lastname: "",
    email: "",
    password: "",
  }

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

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputValues)
        });
        try{
          console.log(res)
          dispatch(addUser({ ...inputValues}));
          navigate(`/`, {replace: true})

        } catch(error){
          console.log(error)
        }
      
  };

  

  // Return del componente main Registro

  return (
    <div className="flex justify-center items-center ">
      <form
        id="registrationForm"
        action="/"
        method="POST"
        onSubmit={handleSubmit}
        className="bg-white mx-auto  border-none rounded-lg shadow-xl overflow-hidden p-6"
      >
        <h1 className="flex justify-center text-3xl font-bold  border-b-4 pb-[7px] border-b-yellow-400  ">
          Únete a nosotros!
        </h1>
        <div className="relative flex flex-col ml-[150px] justify-center border-b-4 border-b-yellow-200 focus-within:border-yellow-400 w-[60%]">
          <label htmlFor="name" className="font-[Monserrat] mt-[8px]">
            Nombre
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ej:Devlights"
              className="block appearance-none focus:outline-none bg-transparent pl-[5px] w-full"
              onChange={handleChange}
              value={inputValues.name}
            />
            {validation.name && (
              <p className="text-red-600 font-[Monserrat]">
                {validation.name}
              </p>
            )}
            {validation.name && console.log(validation)}
          </label>
        </div>
        <div className="flex justify-left text-1xl font-bold  border-b-4 border-b-yellow-200 focus-within:border-yellow-400 ">
          <label htmlFor="lName" className="font-[Monserrat] mt-[10px]">
            Apellido
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Ej:Bootcamps"
              className="block appearance-none focus:outline-none bg-transparent pl-[5px] w-full"
              onChange={handleChange}
              value={inputValues.lastname}
            />
            {validation.lastname && (
              <p className="text-red-600 font-[Monserrat]">
                {validation.lastname}
              </p>
            )}
          </label>
        </div>
        <div className="flex justify-left text-1xl font-bold border-b-4 border-b-yellow-200 focus-within:border-yellow-400 ">
          <label htmlFor="email" className="font-[Monserrat] mt-[10px]">
            Correo electrónico
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="block w-full appearance-none focus:outline-none bg-transparent pl-[5px]"
              onChange={handleChange}
              value={inputValues.email}
            />
            {validation.email && (
              <p className="text-red-600 font-[Monserrat]">
                {validation.email}
              </p>
            )}
          </label>
        </div>
        <div className="flex justify-left text-1xl font-bold border-b-4 border-b-yellow-200 focus-within:border-yellow-400 ">
          <label htmlFor="password" className="font-[Monserrat] mt-[10px]">
            Contraseña
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="block w-full appearance-none focus:outline-none bg-transparent pl-[5px]"
              onChange={handleChange}
              value={inputValues.password}
              required
            />
            {validation.password && (
              <p className="text-red-600 font-[Monserrat]">
                {validation.password}
              </p>
            )}
          </label>
        </div>
        <div className="flex justify-left text-1xl font-bold  border-b-4 border-b-yellow-200 focus-within:border-yellow-400 ">
          <label
            htmlFor="confirmPassword"
            className="font-[Monserrat] mt-[10px]"
          >
            Confirmar contraseña
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              className="block w-full appearance-none focus:outline-none bg-transparent pl-[5px]"
              onChange={(e) => handleChange(e)}
              value={inputValues.confirmPassword}
              required
            />
            {validation.confirmPassword && (
              <p className="text-red-600 font-[Monserrat]">
                {validation.confirmPassword}
              </p>
            )}
          </label>
        </div>
        <br></br> <br></br>
        <div className="flex justify-center text-2xl font-bold ">
          <button
            type="submit"
            id="submit-button"
            className="flex justify-left  bg-yellow  rounded-xl "
          >
            Registrar
          </button>
          <span className="flex justify-left  bg-yellow  rounded-xl ">
            Ingresar <a href="#"></a>
          </span>
        </div>
      </form>
    </div>
  );
}
export default Register;
