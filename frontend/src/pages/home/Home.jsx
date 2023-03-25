import React, { useState, useEffect } from "react";
import { HomeBody } from "../../components/home/HomeBody";
import { HomeHero } from "../../components/Home/HomeHero";
import { useSelector } from "react-redux";
import  CardComponent from "../../components/CardComponent/Card";
import  MapComponent  from "../../components/MapComponent/MapComponent";



export default function Home() {
  const { name } = useSelector((state) => state.user);

  const [posts, setPosts] = useState([])

  const loadPosts = async () => {  //Posible funcion para cargar los posts de la base de datos (no funciona aun)
    const res = await fetch('http://localhost:5000/api/posts')
    const data = await res.json()
    setPosts(data)
  }

  const [marcadores, setMarcadores] = useState([])

  const loadMarcadores = async () => {  //Posible funcion para cargar los marcadores de la base de datos (no funciona aun)
    const res = await fetch('http://localhost:5000/api/marcadores')
    const data = await res.json()
    setMarcadores(data)
  }

  // useEffect(() => {
  //   loadPosts()
  //   loadMarcadores()
  // }, [])

  const lista = [{
    nombreUser: 'Juan',
    tituloPost: 'Perro perdido',
    ubicacionPost:  'Camba Cua Park',
    descripcionPost: 'Hola, mi perro se perdió ayer en la calle 123, si lo ven por favor contactarme al 123456789',
    latitudPost: -27.465038847067884, 
    longitudPost: -58.84456631035704,
    fechaPost: '12/12/2021'}]
  const Marcadores = [
      {id:1,position: {lat: -28.465038847067884, lng: -58.84456631035704}},
      {id:2,position: {lat: -27.460374137170163, lng: -58.828945125378276}},
      {id:3,position: {lat: -26.460374137170163, lng: -58.828945125378276}},] 
  const Center = {lat:-27.4546446,lng:-58.9011161}  
  
  return (
    <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-[calc(100%_-_90px)]">
      <p className="text-lg md:text-4xl text-center">Bienvenido {name} </p>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-3 text-black ">
        <HomeBody />
        <HomeHero />
      </div>
      <div className="mx-auto max-w-7xl flex justify-between text-black mt-20  ">
        <div className="flex ">
          {/* {posts.map((post) => (     //Cuando se pueda cargar los posts de la base de datos, descomentar esto
            <CardComponent
            nombreUser={post.nombreUser}
            tituloPost={post.tituloPost}
            ubicacionPost={post.ubicacionPost}
            descripcionPost={post.descripcionPost}
            latitudPost={post.latitudPost}
            longitudPost={post.longitudPost}
            fechaPost={post.fechaPost}
            />
          ))} */}
          <CardComponent
            nombreUser={lista[0].nombreUser}
            tituloPost={lista[0].tituloPost}
            ubicacionPost={lista[0].ubicacionPost}
            descripcionPost={lista[0].descripcionPost}
            latitudPost={lista[0].latitudPost}
            longitudPost={lista[0].longitudPost}
            fechaPost={lista[0].fechaPost}
          />
          <CardComponent
            nombreUser={lista[0].nombreUser}
            tituloPost={lista[0].tituloPost}
            ubicacionPost={lista[0].ubicacionPost}
            descripcionPost={lista[0].descripcionPost}
            latitudPost={lista[0].latitudPost}
            longitudPost={lista[0].longitudPost}
            fechaPost={lista[0].fechaPost}
          />
          <CardComponent
            nombreUser={lista[0].nombreUser}
            tituloPost={lista[0].tituloPost}
            ubicacionPost={lista[0].ubicacionPost}
            descripcionPost={lista[0].descripcionPost}
            latitudPost={lista[0].latitudPost}
            longitudPost={lista[0].longitudPost}
            fechaPost={lista[0].fechaPost}
          />
        </div>
        <div className="w-1/3 h-100% ">
        <MapComponent Marcadores={Marcadores} Center={Center} />
        </div>
      </div>
    </div>
  );
}

