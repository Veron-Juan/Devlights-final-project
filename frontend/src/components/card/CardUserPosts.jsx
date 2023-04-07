import React from "react";
import { Route, Routes } from "react-router-dom";
import Phone from "../../assets/Phone.svg";
import Location from "../../assets/Location.svg";
import { useState } from "react";
import { PostFormEditor } from "../Post/PostFormEditor";

export default function CardUserPosts(props) {
  const [showPostFormEditor, setShowPostFormEditor] = useState(false);

  const handleOpenPostFormEditor = () => {
    setShowPostFormEditor(true);
    // <Route path="postUpdate" element={<PostFormEditor 
    //   post_id={props._id} 
    //   name={props.name}
    //   contact={props.contact}
    //   img={props.image}
    //   location={props.location}
    //   description={props.description}
    //   nameUser={props.nameUser}
    //   lastnameUser={props.lastnameUser}
    //   createdAt={props.createdAt}
    //   latitudPost={props.latitude}
    //   longitudPost={props.longitude}   />} />
    // console.log("se paso a PostFormEditor");
  };
 
  return (
    <div>
      <div className="h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800  text-center  w-[230px]   ">
        <div className="h-12 text-left ml-2">
          <b>De:{props.nameUser} {props.lastnameUser}  </b>
          <p className="font-light text-sm">Publicado el {new Date (props.createdAt).toLocaleString()}</p>
          {/* new Date (props.date).toDateString() */}
        </div>
        <img
          className="w-full  h-[225px] object-cover"
          src={props.image}
          alt=""
        />

        <div className=" flex flex-col align-middle relative">
          <b>Nombre: {props.name}</b>
          <span className="flex justify-start align-middle p-1 gap-3">
            <img width="30px" src={Phone} />
            <h3>Contacto: {props.contact}</h3>
          </span>
          <span className="flex justify-start align-middle p-1 gap-3">
            <img width="30px" src={Location} />
            <h3>Ciudad: {props.location}</h3>
          </span>
          {props._id}
          <a href={"/postUpdate/"+props.post_id} className="w-[95px] absolute bottom-[-20px] right-2 h-6 rounded-md cursor-pointer bg-yellow">  
            Editar
          </a>
        </div>
      </div>
      {/* {showPostFormEditor &&
          <PostFormEditor
            post_id={props._id} 
            name={props.name}
            contact={props.contact}
            img={props.image}
            location={props.location}
            description={props.description}
            nameUser={props.nameUser}
            lastnameUser={props.lastnameUser}
            createdAt={props.createdAt}
            latitudPost={props.latitude}
            longitudPost={props.longitude}     
          />
      } */}
    </div>
  );
}
