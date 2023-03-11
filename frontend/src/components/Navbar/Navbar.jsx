import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
// import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

// Component Navbar momentáneamente estático, con propiedad blur-effect

const Navbar = () => {
  return (
    <div class=" flex w-full flex-wrap items-center justify-between px-6">
    <nav className="w-screen sticky top-0 z-10 bg-white bg-cover backdrop-filter transparent backdrop-blur-sm bg-opacity-50">
      <div className="flex items-center text-black justify-around font-normal ">
        <div className="md:cursor-pointer -ml-10">
          <img src={Logo}  
        className="logo" />
          {/* Falta añadir href al nametag del LOGO para regresar a home */}
        </div>
        <div class="hidden md:flex items-center space-x-1">
        <ul 
        class="nav list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
       
        <li class="lg:pr-2" data-te-nav-item-ref>
            <a
              class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 hover:bg-yellow-200 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
              href="#"
              data-te-nav-link-ref
              >Galeria</a
            >
          </li>
        <li class="lg:pr-2" data-te-nav-item-ref>
          <a
            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 hover:bg-yellow-200 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
            href="#"
            data-te-nav-link-ref
            >Hubicar</a
          >
        </li>
        <li class="lg:pr-2" data-te-nav-item-ref>
          <a
            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 hover:bg-yellow-200 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="#"
            data-te-nav-link-ref
            >Cuidar</a
          >
        </li>
        <li class="lg:pr-2" data-te-nav-item-ref>
          <a
            class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 hover:bg-yellow-200 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="#"
            data-te-nav-link-ref
            >Donar</a
          >
        </li>
       
      </ul>
      </div>
        {/* Falta incorporar navegación entre páginas una vez estén creadas */}
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <Dropdown />
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
