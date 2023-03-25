
import { useState, useEffect } from 'react';
import Log2 from "../../assets/perro.jpg";
import Home from '../../pages/home/Home';
import Register from "../../pages/home/Home";


export default function Login() {


  const [miLogin,setMiLogin] =useState("false");
  const [email,setEmail]=useState("");
  const [pas,setPas]=useState("");
  const [passwordError, setPaswordError]= useState(false);

  // validacion e ingreso manual por defecto test
  //// esta funcion es llamada por btn
  function iniciarSecion(e){
    e.preventDefault();
    // capturo valor de mi input
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
  
  //   const Alert =()=> {
  //     Swal.fire ("Error de email y/o contraseña!!" )
  //  }
  //evaluo valor obtenido de las variable de estado
    if(email.length===0 || password.length===0){
     alert("Error1 Complete los datos Faltantes !!");
     }else{
      // no consulata a nivel backend aun solo frontedn
      if(email==="Sol@gmail.com" && pas==="12345678"){

           setMiLogin("true");
           //oculto una vez logeado 
           document.getElementById("form_login").style.display="none";
           document.getElementById("img_log2").style.display="none";
      }else{
        //secion no inicada
         setMiLogin("false");
        alert("Error2 de email y/o contraseña!!");
        //limpiamos campos
        document.getElementById("email").value= " ";
        document.getElementById("password").value= " ";
        document.getElementById("email").focus();
  
      } 
    }
  
  }

  return (
    

    
    <div className='flex justify-center bg-cover backdrop-filter transparent backdrop-blur-sm bg-opacity-30 mt-40 p-8 px-8 ' >  
     <div id="img_log2" className='grid grid-cols-1 sm:grid-cols-2' >
       <img className='w-full h-full object-cover flex justify-center' src={Log2} alt="" />
       <form id="form_login" className='w-[80%] mx-auto bg-white rounded-lg'>

       <h2 className="flex justify-center text-3xl font-bold border-b-4 pb-[7px] border-b-yellow-200 py-2 w-[80%]">SIGN IN</h2>
       
       <div className="border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 py-2 w-[80%]">
       <label htmlFor="name" className="font-[Monserrat] mt-[10px]">Email</label>
       <input 
        className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%] "
        id="email" 
        name="email" 
        type="text"
        placeholder='Email'
        onChange={(e)=>setEmail(e.target.value)} required>
       </input>
       </div>

       <div className="border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 py-2  w-[80%] ">
        <label htmlFor="password" className="font-[Monserrat] mt-[10px]">Password</label>
        <input className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%]"
        id="password"
        name="password" 
        type="password"
        placeholder='Constraseña' 
        onChange={(e)=>setPas(e.target.value)} required>
        </input>       
        </div>

        <div>
        <button
            className="my-5 py-2 flex justify-center  bg-yellow  rounded-xl w-[80%]"
            type="submit"
            id="submit-button"
            value="Login"
            onClick={iniciarSecion}
            >Sign In
          </button>
          
          { <div className='flex justify-between text-gray-400 py-2 w-[80%]'>
           <p className='flex items center'> 
            No  tienes una cuenta?{" "}
            </p>

             <p ><a href="/RegisterForm" className="hover:text-amber-300">
              Registrate
             </a></p>
          </div> }
        </div>
    </form>
   
    </div>
    { miLogin === "true" && <Home email={email}/> }
    </div>
  )
}
