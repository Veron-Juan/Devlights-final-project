import React from 'react'
import Phone from "../../assets/Phone.svg"
import Location from "../../assets/Location.svg"

export default function Card(props) {
  return (
    <div>
      
<div className="h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800  text-center  w-[230px]   ">
        <div className='h-12 text-left ml-2' >
            <b>De: Maria Angeles</b>
            <p className='font-light text-sm'>Publicado hace 1 día</p>
        </div>
        <img className="w-full  h-[225px] object-cover" src={props.image} alt="" />
    
    <div className=" flex flex-col align-middle relative">
        <b>Nombre: {props.name}</b>
        <span className='flex justify-start align-middle p-1 gap-3'>
        <img width="30px" src={Phone}/>
        <h3>Contacto: {props.contact}</h3>
        </span>
        <span className='flex justify-start align-middle p-1 gap-3'>
        <img width="30px" src={Location}/>
        <h3>Ciudad: {props.location}</h3>
        </span>
        <a className='w-[95px] absolute bottom-[-20px] right-2 h-6 rounded-md  bg-yellow'>Description</a>
        
        
    </div>
</div>

    </div>
  )
}
