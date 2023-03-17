import React from "react";
import CardComponent from "../../components/CardComponent/Card";
import ModalCard from "../../components/CardComponent/ModalCard";
import MapComponent from "../../components/MapComponent/MapComponent";


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

      
      const zoomLevel = 12
    return (
      <div className="mt-[90px] w-full">
        <div className="mx-auto max-w-7xl flex justify-center text-black mt-20 bg-blue">
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
      </div>
    );
  }
  
  