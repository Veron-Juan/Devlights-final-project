import React, { useState } from "react";
import Log2 from "../../assets/perro.jpg";
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

  const [state, setState] = useState(initialState);

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", state);
      const userData = res.data;
      const { user, token } = userData;

      console.log("user",user);
      console.log("token",token);
      dispatch(addUser({ ...user }));
      navigate(`/`, { replace: true });
    } catch (error) {
      console.log(error);
    }

    setState(initialState);
  };

  return (
    <div className="flex justify-center bg-cover backdrop-filter transparent backdrop-blur-sm bg-opacity-30 mt-40 p-8 px-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <img
          className="w-full h-full object-cover flex justify-center"
          src={Log2}
          alt=""
        />
        <form onSubmit={handleLogin} className="w-[80%] mx-auto bg-white rounded-lg">
          <h2 className="flex justify-center text-3xl font-bold border-b-4 pb-[7px] border-b-yellow-200 py-2 w-[80%]">
            SIGN IN
          </h2>

          <div className="border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 py-2 w-[80%]">
            <label htmlFor="name" className="font-[Monserrat] mt-[10px]">
              Email
            </label>
            <input
              name="email"
              id="email"
              value={state.email}
              onChange={handleInputChange}
              className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%] "
            ></input>
          </div>
          <div className="border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 py-2  w-[80%] ">
            <label htmlFor="password" className="font-[Monserrat] mt-[10px]">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={state.password}
              onChange={handleInputChange}
              className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%]"
            ></input>
          </div>

          {/* <div className='flex justify-between text-gray-400 py-2 w-[80%]'>
        <p className='flex items center'> 
        <input className='mr-2' type="checkbox" />Remember Me</p>
        <p >Forgot Password</p>
        </div> */}

          <div>
            <button
              type="submit"
              id="submit-button"
              className="my-5 py-2 flex justify-center  bg-yellow  rounded-xl w-[80%]"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
