import React from "react";
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

  return (
    <>
      <div className="home-card relative w-full min-h-[360px] overflow-hidden rounded-lg" data-aos="fade-up">
        <img className="absolute inset-0 overflow-hidden rounded-lg h-full block object-cover transition-all duration-300 ease-in delay-0" src={props.image} alt="Pet's image"/>
        
        <div className="flex flex-col h-full justify-between isolate p-2 text-white">
          <div className="flex items-center justify-between text-sm select-none">
            <div className="flex items-center text-white">
              <i className={`${props.petType === 'perro' ? "bg-yellow-500 fa-dog" : "bg-gray-dark fa-cat"} fa-solid p-2 mr-2 rounded-full`}></i>
            </div>
            <div>
              <p className={`${props.status === 'se busca' ? "bg-pink-700" : "bg-orange-800"} rounded-lg text-white px-2 py-1`}>{props.status}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <a onClick={handleOpenModal} className="py-1 px-3 bg-green-800 hover:bg-green-700 shadow-lg shadow-green-700/50 rounded-md cursor-pointer text-sm">Ver</a>
          </div>
        </div>
      </div>
      {showModal &&
          <ModalCard 
          id={props.key}
          nameUser={props.nameUser}
          lastnameUser={props.lastnameUser}
          tituloPost={props.name}
          descripcionPost={props.description}
          imgPost={props.image}
          contacto={props.contact}
          petType={props.petType}
          //
          ubicacionPost={props.location}
          fechaPost={new Date(props.createdAt).toLocaleDateString()}
          latitudPost={props.latitudPost}
          longitudPost={props.longitudPost}
          status={props.status}
          handleCloseModal={() => setShowModal(false)}
        />
      }
    </>
  );
}
