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
    <nav className="w-full fixed z-10 bg-opacity-50 top-0 backdrop-filter transparent bg-cover backdrop-blur-sm bg-white">
      <div className="shadow-md w-full top-0 left-0 h-[90px]">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7 transparent">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center
      text-gray-800"
          >
            <img src={Logo} alt="Mascotas logo" className="w-[150px]" />
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <Icon icon={open ? "mdi:window-close" : "mdi:menu"}></Icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-opacity-100 backdrop-filter transparent bg-cover backdrop-blur-lg ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-800 hover:bg-yellow-200 duration-500 "
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="pl-[6px] ml-[20px]">
              <Dropdown />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
