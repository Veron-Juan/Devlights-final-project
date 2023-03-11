import React, { useEffect, useState } from "react";

// Formulario de registro que solicita: Nombre y apellido, email y contraseña

function Register() {
  //seteamos los valores iniciales de los form's inputs
  const [inputValues, setInputValue] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
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

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <div className="flex justify-left text-1xl font-bold  border-b-4 border-b-yellow-200 focus-within:border-yellow-400 ">
          <label htmlFor="fName" className="font-[Monserrat] mt-[8px]">
            Nombre
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="Ej:Devlights"
              className="block appearance-none focus:outline-none bg-transparent "
              onChange={(e) => handleChange(e)}
              value={inputValues.fName}
            />
            {validation.fName && (
              <p className="text-red-200 font-[Monserrat]">
                {validation.fName}
              </p>
            )}
            {validation.fName && console.log(validation)}
          </label>
        </div>
        <div className="flex justify-left text-1xl font-bold  border-b-4 border-b-yellow-200 focus-within:border-yellow-400 ">
          <label htmlFor="lName" className="font-[Monserrat] mt-[10px]">
            Apellido
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Ej:Bootcamps"
              className="block appearance-none focus:outline-none bg-transparent pl-[5px] w-full"
              onChange={(e) => handleChange(e)}
              value={inputValues.lName}
            />
            {validation.lName && (
              <p className="text-red-600 font-[Monserrat]">
                {validation.lName}
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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
