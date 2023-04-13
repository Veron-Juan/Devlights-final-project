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
    <>
      <div className="w-full bg-black rounded-lg overflow-hidden relative">
        <img className="min-h-[260px] object-cover" src={props.image} alt={props.name}/>
        <p className={`${props.status === 'se busca' ? "bg-pink-700" : "bg-orange-800"} right-0 top-0 absolute rounded-lg text-white px-2 py-1`}>{props.status}</p>
        <div className="flex flex-col flex-wrap justify-between p-3 text-white text-sm">
          <p className="truncate w-[90%]"><i className="bg-gray-700 fa-hashtag fa-solid p-2 mr-2 rounded-full"></i>{props.post_id}</p>
          <p className="my-3"><i className="bg-gray-700 fa-calendar fa-solid p-2 mr-2 rounded-full"></i>{new Date (props.createdAt).toLocaleString()}</p>
          <p><i className="bg-gray-700 fa-location-dot fa-solid p-2 mr-2 rounded-full"></i>{props.location}</p>
          <a href={`/postUpdate/${props.post_id}`} className="py-1 px-3 bg-yellow-600 hover:bg-yellow-700 shadow-lg shadow-green-700/50 rounded-md cursor-pointer text-sm ml-auto uppercase">Editar</a>
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
    </>
  );
}
