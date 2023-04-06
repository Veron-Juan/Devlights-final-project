import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import UserImg from "../../assets/user.svg";
import { clearLocalStorageUser } from "../../redux/states/user";


const Nav = () => {
  let [open, setOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  
  const cerrarSesion = () => {
    clearLocalStorageUser();
    location.reload();
  };

  let Links = [
    { name: "MASCOTAS CERCANAS", link: "/posts" },
    { name: "CUIDADOS", link: "/" },
    { name: "DONACIONES", link: "/" },
  ];

  return (
  <div>
    <nav className="px-2 sm:px-4 py-2.5">
      <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
            <img src={Logo} className="h-[70px]" alt="Flowbite Logo" />
        </a>

        <div className="flex items-center md:order-2 relative">
          {/* User profile */}
          <button onClick={() => setUserOpen(!userOpen)} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src={UserImg} alt="user photo" />
          </button>
          {/* <!-- Dropdown User menu --> */}
          <div id="user-dropdown" className={`${userOpen ? '' : 'hidden'} z-50 text-base list-none bg-gray-50 divide-y divide-gray-200 rounded-lg shadow`} style={{position:'absolute', top:0, right:0, marginTop: '3rem'}} >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 truncate">Pepito Gomez</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cuenta</a>
              </li>
              <li>
                <a onClick={cerrarSesion} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cerrar sesion</a>
              </li>
            </ul>
          </div>

          {/* Button Menu Mobile */}
          <button onClick={() => setOpen(!open)}  data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        {/* Menu links */}
        <div className={`${open ? '' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="mobile-menu-2">
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {Links.map((link) => (
              <li key={link.name} className="md:ml-3 text-sm md:my-0 my-3">
                <a
                  href={link.link}
                  className="text-black hover:border-b-4 border-b-yellow-200  p-[2px] duration-200 "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>

  </div>
  );
};

export default Nav;



