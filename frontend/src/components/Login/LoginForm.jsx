import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/users";
import Log2 from "../../assets/perro.jpg";
import Home from '../../pages/home/Home';
import Register from "../../components/register/RegisterForm";

export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  // const[shadowData, setShowData] = useState(false);

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  async function onFormSubmit(event) {
    event.preventDefault();
    //  console.log("email",email)
    //  console.log("password",password)
    //   setShowData(true);

    // aca va a repository
      try {
        await loginUser({ email, password });
      
        navigate("/");
      } catch (error) {
      console.log("hubo un error", error);
      }
  }



  return (
    <div className='flex justify-center bg-cover backdrop-filter transparent backdrop-blur-sm bg-opacity-30 mt-40 p-8 px-8 ' >  
    <div id="img_log2" className='grid grid-cols-1 sm:grid-cols-2' >
    <img className='w-full h-full object-cover flex justify-center' src={Log2} alt="" />
     <form  className='w-[80%] mx-auto bg-white rounded-lg' 
       >
        <h2 className="flex justify-center text-3xl font-bold border-b-4 pb-[7px] border-b-yellow-200 py-2 w-[80%]">SIGN IN</h2>
        <div className="border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 py-2 w-[80%]">
         <label htmlFor="name" className="font-[Monserrat] mt-[10px]">Email</label>
         <input className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%] "
         id="email" 
          name="email" 
          type="text"
          placeholder='Email' 
          onChange={onEmailChange} >
         </input>
       </div>
       <div className="border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 py-2  w-[80%] ">
       <label htmlFor="password" className="font-[Monserrat] mt-[10px]">Password</label>
        <input className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%]"
         id="password"
         name="password" 
         type="password"
         placeholder='Constraseña'
         onChange={onPasswordChange}>
          </input>       
        </div>
        
        <div>
        <button
            className="my-5 py-2 flex justify-center  bg-yellow  rounded-xl w-[80%]"
            type="submit"
            id="submit-button"
            value="Login"
            onClick={onFormSubmit}
            >Sign In
          </button>
         <div className='flex justify-between text-gray-400 py-2 w-[80%]'>
           <p className='flex items center'> 
            No  tienes una cuenta?{" "}
            </p>

             <p ><a href="/" className="hover:text-amber-300">
              Registrate
             </a></p>
          </div>
        </div>
    </form>
    </div>
    </div>
  )
}
