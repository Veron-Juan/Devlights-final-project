import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
// import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

// Component Navbar momentáneamente estático, con propiedad blur-effect

const Navbar = () => {
  return (
    <nav className="w-screen sticky top-0 z-10 bg-white bg-cover backdrop-filter transparent backdrop-blur-sm bg-opacity-50">
      <div className="flex items-center text-black justify-around font-normal ">
        <div className="md:cursor-pointer -ml-10">
          <img src={Logo} alt="navbar-logo" className="md:cursor-pointer" />
          {/* Falta añadir href al nametag del LOGO para regresar a home */}
        </div>

        <ul className="md:flex hidden uppercase items-center font-[Monserrat] text-xs gap-8 ">
          <li>
            {/* <Link to="" className=""> */}
            Mascotas cercanas
            {/* </Link>  */}
          </li>
          <li>
            {/* <Link to="#" className=""> */}
            Cuidados
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="#" className=""> */}
            Donaciones
            {/* </Link> */}
          </li>
          <li>
            {/* <Link to="#" className=""> */}
            Galería de Mascotas
            {/* </Link> */}
          </li>
        </ul>

        {/* Falta incorporar navegación entre páginas una vez estén creadas */}

        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
