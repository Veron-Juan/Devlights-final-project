import React from "react";
import Phone from "../../assets/Phone.svg";
import Location from "../../assets/Location.svg";
import { useState, useEffect } from "react";
import ModalCard from "../CardComponent/ModalCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Card(props) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    console.log("se cambio");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


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




  return (
    <div>
      <div className="h-[410px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800  text-center  w-[240px] " data-aos="fade-up">
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
          <a onClick={handleOpenModal} className="w-[95px] absolute bottom-[-20px] right-2 h-6 rounded-md cursor-pointer bg-yellow">
            
            Ver más
          </a>
        </div>
      </div>
      {showModal &&
          <ModalCard 
          nameUser={props.nameUser}
          lastnameUser={props.lastnameUser}
          tituloPost={props.name}
          descripcionPost={props.description}
          imgPost={props.image}
          contacto={props.contact}
          ubicacionPost={props.location}
          fechaPost={new Date (props.createdAt).toLocaleDateString()}
          latitudPost={props.latitudPost}
          longitudPost={props.longitudPost}
          type={props.type}
          status={props.status}
          handleCloseModal={() => setShowModal(false)}
          />
      }
    </div>
  );
}
