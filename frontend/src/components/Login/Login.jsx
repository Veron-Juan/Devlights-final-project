import React from 'react'
import Log2 from "../../assets/perro.jpg";
export default function Login() {
  return (
    

    
    <div className='flex justify-center bg-cover backdrop-filter transparent backdrop-blur-sm bg-opacity-30 mt-40 p-8 px-8 ' >  
     <div className='grid grid-cols-1 sm:grid-cols-2' >
       <img className='w-full h-full object-cover flex justify-center' src={Log2} alt="" />
     <form className='w-[80%] mx-auto bg-white rounded-lg'>

       <h2 className="flex justify-center text-3xl font-bold border-b-4 pb-[7px] border-b-yellow-200 py-2 w-[80%]">SIGN IN</h2>
       
       <div className="border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 py-2 w-[80%]">
       <label htmlFor="name" className="font-[Monserrat] mt-[10px]">User Name</label>
       <input className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%] ">
       </input>
       </div>
       <div className="border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 py-2  w-[80%] ">
        <label htmlFor="password" className="font-[Monserrat] mt-[10px]">Password</label>
        <input className="block appearance-none focus:outline-none bg-transparent pl-[5px] py-2 w-[80%]">
        </input>       
        </div>

        <div className='flex justify-between text-gray-400 py-2 w-[80%]'>
        <p className='flex items center'> 
        <input className='mr-2' type="checkbox" />Remember Me</p>
        <p >Forgot Password</p>
        </div>
        
       
        <div>
        <button
            type="submit"
            id="submit-button"
            className="my-5 py-2 flex justify-center  bg-yellow  rounded-xl w-[80%]">Sign In
          </button>
        </div>
    </form>
    </div>
    </div>
  )
}
