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
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[80vw] sm:w-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white">
            {/* Info del Post */}

            <div className="flex flex-row h-auto justify-between my-2 mx-2.5 pb-2 border-b ">
              <div className="flex flex-row h-auto  ">
                <img src={user} className="h-8 w-8 rounded-full   " />
                <p className="font-semibold text-xl text-black ml-2">
                {props.nameUser} {props.lastnameUser}
                </p>
              </div>

                <button
                className="bg-white text-black  hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150  "
                type="button"
                onClick={props.handleCloseModal}
              >
                <Icon icon={closeIcon} className="w-5 h-8 " />{" "}
              </button>
            </div>
            <div className=" flex flex-col mb-2 mx-2 sm:flex-row">
              <div className="w-full sm:w-1/2 flex flex-col mr-1 justify-between">
                  <div>
                    <img src={props.imgPost} className="rounded-md" />
                    {/* Posible idea cuando sea en mobile que aparezca un icono de telefono como contacto al lado del titulo */}
                    <p className="font-bold text-black text-xl mt-2 mb-1">
                    {props.tituloPost}
                  </p>
                   
                    <p className="text-black text-sm mt-1 mb-2">
                    {props.descripcionPost}
                  </p>{" "}
                </div>
                  <button
                    className="hidden sm:block bg-white-black text-black  w-fit active:bg-orange font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 self-end"
                    type="button"
                    // Falta accion de contacto
                  >
                    {props.contacto}
                  </button>
                </div>
              {/* Mapa y contacto */}
              <div className="w-full mx-0 sm:ml-1 sm:w-1/2 flex flex-col   ">
                    <div className="w-full h-40 rounded-md sm:h-full">
                      <MapComponent Marcadores={marcador} Center={center} selecionMarcador={false}/>
                    </div>
                    <div className="h-auto px-1  flex flex-row justify-between mt-2 bg-orange rounded-md text-xs sm:text-sm ">
                      <p className="font-semibold text-black  ">
                        Ultima vez visto en {props.ubicacionPost}  
                      </p>
                      <p className="font-semibold text-black  ">
                        {props.fechaPost} 
                      </p>     
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalCard;
