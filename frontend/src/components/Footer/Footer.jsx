import React from 'react'
import Face from "../../assets/face.png";
import Insta from "../../assets/instam.png";
import Tutter from "../../assets/twitter.png";
import Logo from "../../assets/logo.svg";
import WhatsApp from "../../assets/map.png";
import Mapa from "../../assets/whatsApp.png";
const Footer = () => {
  return (
  <div className="bg-white bg-cover backdrop-filter transparent backdrop-blur-sm bg-opacity-30">
    
    <div class="flex justify-center bg-gradient-to-r from-yellow-200 via-white to-teal-900 p-12">
      
        <div Class="logo_footer">
        <img src={Logo} href='#'/>
        </div>
        
        <div Class="text_footer text-gray-600 text-center " >
        © +Cotas 2023 - All Rights Reserved   Siguinos!
        </div>
        
        <div class="items-center">
      
        <td><img src={Face} href='#'/>  
          <img src={Tutter} href='#' />  
          </td>
         <td><img src={Insta} href='#'/>
          <img src={WhatsApp} href='#'/> 
          </td>
         
         
        </div>
     
    </div>
    </div>
   
    
     
    
  )
}

export default Footer