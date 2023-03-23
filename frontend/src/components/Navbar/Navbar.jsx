import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Dropdown from "./Dropdown";
import Logo from "../../assets/logo.svg";

const Nav = () => {
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "MASCOTAS CERCANAS", link: "/" },
    { name: "CUIDADOS", link: "/" },
    { name: "DONACIONES", link: "/" },
  ];

  return (
    <nav className="w-100 h-[90px] transparent max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between flex">
        <img src={Logo} alt="Mascotas logo" className="w-[150px]"/>

        <div onClick={() => setOpen(!open)} className="text-3xl cursor-pointer md:hidden">
          <Icon icon={open ? "mdi:window-close" : "mdi:menu"}></Icon>
        </div>

        <ul className={`bg-white sm:justify-center md:flex md:items-center  md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:bg-opacity-0 ${ open ? "top-20 " : "top-[-490px]" }`} >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-3 text-sm md:my-0 my-7">
              <a
                href={link.link}
                className="text-black hover:border-b-4 border-b-yellow-200  p-[2px] duration-200 "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block pl-[6px] sm:ml-[-20px] xl:ml-[10px]">
          <Dropdown />
        </div>
    </nav>
  );
};

export default Nav;



