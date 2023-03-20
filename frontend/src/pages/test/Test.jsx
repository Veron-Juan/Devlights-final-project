import React from "react";
import PostRegister from "../post/PostPage";

import CardComponent from "../../components/CardComponent/Card";
import ModalCard from "../../components/CardComponent/ModalCard";
import MapComponent from "../../components/MapComponent/MapComponent";
import { PostForm } from "../../components/Post/PostForm";







export default function Test() {
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
    {id:3,position: {lat: -26.460374137170163, lng: -58.828945125378276}},
    ]    
    
    const Center = {lat:-27.4546446,lng:-58.9011161}
    
    console.log(navigator.getCurrentPosition)

    return (
      <div className="mt-[90px] w-full">
        <div className='min-h-full max-w-ful flex  justify-center'>
        <PostForm/>
      </div>
      </div>
     
    );
  }
  
  