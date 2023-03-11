import React from 'react'
import Face from "../../assets/face.png";
import Insta from "../../assets/instam.png";
import Tutter from "../../assets/twitter.png";
import QR from "../../assets/qr.png";
import WhatsApp from "../../assets/map.png";
import Mapa from "../../assets/whatsApp.png";
const Footer = () => {
  return (
    
    <div className=" flex items-center text-black justify-center font-normal" >
    
   
    <img src={QR} href='#'/> 
     <img src={Face} href='#'/>  
     <img src={Tutter} href='#' />  
     <img src={Insta} href='#'/>
     <img src={WhatsApp} href='#'/> 
     <img src={Mapa} href='#'/> 
     Contactanos!! 
    </div>
    
  )
}

export default Footer