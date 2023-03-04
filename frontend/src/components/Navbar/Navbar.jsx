import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
// import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-l from-[#DEFFF8] w-full absolute z-10 top-0 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="flex items-center text-black justify-around font-normal ">
        <div className="md:cursor-pointer -ml-10">
          <img src={Logo} alt="navbar-logo" className="md:cursor-pointer" />
        </div>

        <ul className="md:flex hidden uppercase items-center font-[Poppins] text-xs gap-8 ">
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

        {/* aaaaaa */}

        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
