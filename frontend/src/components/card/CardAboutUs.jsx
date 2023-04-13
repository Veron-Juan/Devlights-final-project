import React from "react";
import { Route, Routes } from "react-router-dom";
import link from "../../assets/linkedin.svg";
import git from "../../assets/github.svg";
import { useState } from "react";
import { PostFormEditor } from "../Post/PostFormEditor";

export default function CardAboutUs(props) {
 
  return (
    <>
      <div className="w-full bg-black rounded-lg overflow-hidden relative">
        <img className="min-h-[260px] object-cover" src={props.image} alt={props.name}/>
        {/* <p className={`${props.status === 'se busca' ? "bg-pink-700" : "bg-orange-800"} right-0 top-0 absolute rounded-lg text-white px-2 py-1`}>{props.status}</p> */}
        <div className="flex flex-col flex-wrap justify-between p-3 text-white text-sm">
          <a  href={`${props.git}`} className="truncate w-[90%]"><img className=" max-w-[30px] bg-gray-700  fa-solid p-2 mr-2 rounded-full" src={git}></img>Github</a>
          <a href={`${props.link}`} className="my-3"><img className=" max-w-[30px] bg-gray-700 fa-solid p-2 mr-2 rounded-full" src={link}></img>Linkedin</a>
        </div>
      </div>
    </>
  );
}
