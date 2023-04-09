import React, { useState } from "react";
import { HomeContent } from "../../components/Home/HomeContent";
import { HomeHero } from "../../components/Home/HomeHero";
import { HomeMap } from "../../components/Home/HomeMap";
import { useSelector } from "react-redux";

import Card from "../../components/Card/Card";
import * as servicePosts from "../../services/postService"
import modelo1 from "../../assets/modelo1.jpg";
import modelo2 from "../../assets/modelo2.jpg";
import modelo3 from "../../assets/modelo3.jpg";



export default function Home() {

  const posts = [
    {
      key: 1,
      name: "Toby",
      contact: "555-1234",
      description: "Labrador de color marrón claro, muy cariñoso y juguetón. Tiene un collar azul con su nombre y mi teléfono.",
      nameUser: "Laura",
      lastnameUser: "Carrizo",
      image: modelo2,
      location: "Corrientes",
      createdAt: new Date("2023-03-1"),
      latitudPost: -27.474051,
      longitudPost: -58.853709,
      type: 'perro',
      status: 'se busca'
    },
    {
      key: 2,
      name: "desconocido",
      contact: "555-4321",
      description: "Gata blanca con manchas negras, muy tímida y asustadiza.",
      nameUser: "Juan",
      lastnameUser: "Martínez",
      image: modelo1,
      location: "Corrientes",
      createdAt:  new Date("2023-02-16"),  //funcion para pasar string a date 
      latitudPost: -27.463225,
      longitudPost: -58.841295,
      type: 'gato',
      status: 'encontrado'
    },
    {
      key: 3,
      name: "Lola",
      contact: "555-6789",
      description: "Pastor alemán de color negro y marrón, muy inteligente y obediente. Tiene una cicatriz en la pata trasera izquierda y una mancha blanca en el pecho.",
      nameUser: "Ana",
      lastnameUser: "López",
      image: modelo3,
      location: "Resistencia",
      createdAt: new Date("2023-01-10"),
      latitudPost: -27.432617,
      longitudPost: -58.969629,
      type: 'perro',
      status: 'se busca'
    }
  ];

  const { name } = useSelector((state) => state.user);
  
  return (
    <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      {/* <p className="text-lg md:text-4xl text-center">Bienvenido {name} </p> */}
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-3 text-black ">
        <HomeContent />
        <HomeHero />
      </div>
      <div className="mx-auto min-w-[80vw] min-h-[50vh] flex justify-between text-black mt-[25vh]">
        <div  className="mx-auto grid grid-cols-1 grid-row sm:grid-cols-2 md:grid-cols-3 gap-12">
          {posts.map((i)=>{
            return(
              <Card
              key={i.key}
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
              type={i.type}
              status={i.status}
              />
            )
          })}
        </div>
      </div>
      <div className="mx-auto min-w-[80vw] min-h-[60vh] flex justify-between text-black mt-[25vh]" >
            <HomeMap/>
      </div>
    </div>
  );
}

