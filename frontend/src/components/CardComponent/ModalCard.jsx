import React from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close";
import MapComponent from "../MapComponent/MapComponent";
import user from "../../assets/User.svg";
import phone from "../../assets/Phone.svg";

// Componente modal que se muestra al seleccionar ver mas sobre una carta
const ModalCard = (props) => {
  const marcador = [
    {
      id: 1,
      position: {
        lat: Number(props.latitudPost),
        lng: Number(props.longitudPost),
      },
    },
  ];

  const center = {
    lat: Number(props.latitudPost),
    lng: Number(props.longitudPost),
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50 overflow-x-auto">
        <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg shadow-lg flex flex-col w-full bg-white py-2 px-2.5">
            {/* row */}
            <div className="flex flex-row h-auto justify-between pb-2">
              <div className="flex flex-row items-center">
                <span className={`px-2 py-1 text-white rounded-lg ${props.type === 'perro' ? "bg-yellow-500" : "bg-gray-dark"}`}>
                  <i className={`${props.type === 'perro' ? "fa-dog" : "fa-cat"} fa-solid `}></i>
                </span>
                <p className="font-semibold text-xl text-black ml-2">{props.tituloPost}</p>
              </div>
              <button className="bg-white text-black" type="button" onClick={props.handleCloseModal}>
                <Icon icon={closeIcon} className="w-5 h-8" />
              </button>
            </div>
            
            {/* 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col justify-between">
                <div className="relative rounded-md overflow-hidden">
                  <img src={props.imgPost} />
                  <span className="absolute uppercase top-0 right-0 text-white text-xs px-2 py-1 bg-green-600">{props.status}</span>
                </div>
                <div className="flex justify-between items-center text-xs my-2 text-gray-600">
                  <p>Publicado por: {props.nameUser} {props.lastnameUser}</p>
                  <a href={"tel:" + props.contacto} className="flex items-center px-2 py-1 bg-orange-600 rounded-md text-white ">
                    <i className="fa-solid fa-phone fa-xs mr-2.5"></i> {props.contacto}
                  </a>
                </div>
                <p className="text-black text-sm mt-1 mb-2">{props.descripcionPost}</p>
              </div>
              <div className="flex flex-col">
                <div className="w-full h-40 rounded-md overflow-hidden sm:h-full">
                  <MapComponent Marcadores={marcador} Center={center} selecionMarcador={false}/>
                </div>
                <div className="h-auto px-2 py-1 flex flex-row justify-between mt-2 bg-pink-600 text-white rounded-md text-xs sm:text-sm">
                  <p>
                    <i className="fa-solid fa-location-dot mr-1"></i> {props.ubicacionPost}
                  </p>
                  <p>{props.fechaPost}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCard;
