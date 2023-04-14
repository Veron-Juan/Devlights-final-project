import React, { useState } from "react";
import { HomeContent } from "../../components/Home/HomeContent";
import { HomeHero } from "../../components/Home/HomeHero";
import { HomeMap } from "../../components/Home/HomeMap";

import { Link } from "react-router-dom";

import Card from "../../components/card/Card";





export default function Home() {

  const posts = [
    {
      key: 1,
      name: "Toby",
      contact: "555-1234",
      description: "Labrador de color marrón claro, muy cariñoso y juguetón. Tiene un collar azul con su nombre y mi teléfono.",
      nameUser: "Laura",
      lastnameUser: "Carrizo",
      image: "https://www.publicdomainpictures.net/pictures/20000/nahled/white-labrador-dog-2.jpg",
      location: "Corrientes",
      createdAt: new Date("2023-03-1"),
      latitudPost: -27.474051,
      longitudPost: -58.853709,
      petType: 'perro',
      status: 'se busca'
    },
    {
      key: 2,
      name: "desconocido",
      contact: "555-4321",
      description: "Gata blanca con manchas negras, muy tímida y asustadiza.",
      nameUser: "Juan",
      lastnameUser: "Martínez",
      image: "https://img.freepik.com/fotos-premium/gato-campo-blanco-manchas-negras-cerca_558469-2672.jpg",
      location: "Corrientes",
      createdAt:  new Date("2023-02-16"),  //funcion para pasar string a date 
      latitudPost: -27.463225,
      longitudPost: -58.841295,
      petType: 'gato',
      status: 'se encontro'
    },
    {
      key: 3,
      name: "Lola",
      contact: "555-6789",
      description: "Pastor alemán de color negro y marrón, muy inteligente y obediente. Tiene una cicatriz en la pata trasera izquierda y una mancha blanca en el pecho.",
      nameUser: "Ana",
      lastnameUser: "López",
      image: "https://perroselite.com/wp-content/uploads/PERROS-ELITE-GUARDIA-Y-PROTECCION-NORRIS-0.jpg",
      location: "Resistencia",
      createdAt: new Date("2023-01-10"),
      latitudPost: -27.432617,
      longitudPost: -58.969629,
      petType: 'perro',
      status: 'se busca'
    },
    {
      key: 5,
      name: "Luna",
      contact: "555-1234",
      description: "'Beagle' tricolor, muy curiosa y sociable. Tiene un collar rojo y una plaquita con su nombre.",
      nameUser: "Laura",
      lastnameUser: "Pérez",
      image: "https://media.npr.org/assets/img/2022/07/13/beagle-1_custom-3da448b2b6c36aae8918e6c2ae208dec6873abfe.jpg",
      location: "Formosa",
      createdAt: new Date("2023-01-15"),
      latitudPost: -26.177530,
      longitudPost: -58.178138,
      petType: 'perro',
      status: 'se busca'
    }
    
  ];

  
  
  return (
    <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      {/* <p className="text-lg md:text-4xl text-center">Bienvenido {name} </p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-black my-10">
        <HomeContent />
        <HomeHero />
      </div>
      <div className="flex justify-between items-center mt-10 mb-5">
        <h1 className="text-xl md:text-2xl font-bold">Ultimas Novedades</h1>
        <Link to="/posts" className="px-5 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-md">Ver más</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {posts.map((i)=>{
          return(
            <Card
            key={i.key}
            id={i.key}
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
            petType={i.petType}
            status={i.status}
            />
          )
        })}
      </div>
      <>
        <HomeMap/>
      </>
    </div>
  );
}

