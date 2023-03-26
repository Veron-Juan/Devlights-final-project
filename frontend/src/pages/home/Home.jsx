import React, { useState, useEffect } from "react";
import { HomeContent } from "../../components/home/HomeContent";
import { HomeHero } from "../../components/Home/HomeHero";
import { useSelector } from "react-redux";

import  MapComponent  from "../../components/MapComponent/MapComponent";
import Card from "../../components/card/Card";
import * as servicePosts from "../../services/postService"



export default function Home() {

  const posts = [
    {
      name: "Toby",
      contact: "555-1234",
      description: "Labrador de color marrón claro, muy cariñoso y juguetón. Tiene un collar azul con su nombre y mi teléfono.",
      nameUser: "Laura",
      lastnameUser: "Carrizo",
      image: "",
      location: "Corrientes",
      createdAt: new Date("2023-03-1"),
      latitudPost: "",
      longitudPost: ""
    },
    {
      name: "Luna",
      contact: "555-4321",
      description: "Gata blanca con manchas negras, muy tímida y asustadiza. Tiene un chip identificativo y una placa con su nombre y mi número.",
      nameUser: "Juan",
      lastnameUser: "Martínez",
      image: "",
      location: "Corrientes",
      createdAt:  new Date("2023-02-16"),  //funcion para pasar string a date 
      latitudPost: "",
      longitudPost: ""
    },
    {
      name: "Lola",
      contact: "555-6789",
      description: "Pastor alemán de color negro y marrón, muy inteligente y obediente. Tiene una cicatriz en la pata trasera izquierda y una mancha blanca en el pecho.",
      nameUser: "Ana",
      lastnameUser: "López",
      image: "",
      location: "Resistencia",
      createdAt: new Date("2023-01-10"),
      latitudPost: "",
      longitudPost: ""
    }
  ];


  const { name } = useSelector((state) => state.user);

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async ()=> {
      const res = await servicePosts.getPosts();
      try{
        const data = res.data
        setData(data)
      } catch(error) {
        console.log(error)
      } 
    }
    loadPosts()
  }, []);


  const [marcadores, setMarcadores] = useState([])

  const Center = {lat:-27.4546446,lng:-58.9011161}  
  
  return (
    <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-[calc(100%_-_90px)]">
      <p className="text-lg md:text-4xl text-center">Bienvenido {name} </p>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-3 text-black ">
        <HomeContent />
        <HomeHero />
      </div>
      <div className="mx-auto max-w-7xl flex justify-between text-black mt-20 bg-blue ">
        <div className="mr-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 ">
          {posts.map((i)=>{
            return(
              <Card
              name={i.name}
              contact={i.contact}
              description={i.description}
              nameUser={i.nameUser}
              lastnameUser={i.lastnameUser}
              image={i.image}
              location={i.location}
              createdAt={i.createdAt}
              latitudPost={i.latitudPost}
              longitudPost={i.longitudPost}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

