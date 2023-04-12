import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardUserPosts from "../../components/card/CardUserPosts";
import CardComponent from "../../components/card/Card";
import SearchInput from "../../components/searchInput/SearchInput.jsx";
import LoaderPosts from "./LoaderPosts";
import axios from "axios";
import * as servicePosts from "../../services/postService"

export default function UserPosts() {
  const {_id } = useSelector((state) => state.user);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async ()=> {
      const res = await servicePosts.getUserPosts(_id);
      try{
        const data = res.data.publication
        console.log(data)
        setData(data)
        setLoading(false)
        //proceso de imagen
        data.map((i) => {
          const base64String = btoa(
            new Uint8Array(i.img.data.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          ); 
      
          
        }) 
      } catch(error) {
        console.log(error)
      } 
    }
    loadPosts()
  }, []);

  

  function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
       arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
 }
  return (
    <>
    {loading && <LoaderPosts/>}
    <div  
    className="flex  py-20  justify-center  ">

    <div className="mr-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:grid-cols-4">
    
    
    {data.map((i)=>{
      return(

        <CardUserPosts
        post_id={i._id}
        name={i.name}
        contact={i.contact}
        image={`data:image/png;base64,${toBase64(i.img.data.data)}`}
        location={i.location}
        description={i.description}
        nameUser={i.nameUser}
        lastnameUser={i.lastnameUser}
        createdAt={i.createdAt}
        latitudPost={i.latitude}
        longitudPost={i.longitude}
        
        />
      )
    })}
    </div>
    
    </div>
    
    </>
  );
}
