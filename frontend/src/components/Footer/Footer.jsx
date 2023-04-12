import React from "react";
import Face from "../../assets/face.png";
import Insta from "../../assets/instam.png";
import Tutter from "../../assets/twitter.png";
import Logo from "../../assets/logo.svg";
import WhatsApp from "../../assets/map.png";
import Mapa from "../../assets/whatsApp.png";


const Footer = () => {
  return (
  <footer>
    <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="text-gray-600 mb-5 md:mb-0">
        <img className="h-[80px]" src={Logo} />
      </div>
      
      <div className="text-gray-600 mb-3 md:mb-0">
        © +Cotas 2023 - All Rights Reserved
      </div>
        
      <div className="flex justify-between items-center mb-3 md:mb-0">
        <img src={Face} />  
        <img className="pl-2" src={Tutter}  />  
        <img className="pl-2" src={Insta} />
        <img className="pl-2" src={WhatsApp} />
      </div>
    </div>
  </footer>
  )
};

export default Footer;