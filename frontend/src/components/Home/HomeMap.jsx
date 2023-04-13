import React,{useEffect, useState} from 'react';
import MapComponent from '../MapComponent/MapComponent';
import * as servicePosts from "../../services/postService"
import AOS from "aos";
import "aos/dist/aos.css";

export function HomeMap() {

    const [Marcadores, setMarcadores] = useState([])
    const Center = {
        lat: -27.4727499,
        lng: -58.8528593,
      };

    const [Cantidad, setCantidad] = useState(0)

    useEffect(() => {
      AOS.init();
      AOS.refresh();
        const loadMarcadores = async ()=> {
          const res = await servicePosts.getLocations();
          try{
            const data = res.data
            setMarcadores(data)
            setCantidad(data.length)
            console.log(data)
          } catch(error) {
            console.log(error)
          } 
        };
        loadMarcadores();
      }, []);
      
   
    return (
        <div className="flex flex-col justify-between text-black items-center my-20" data-aos="fade-up">
            <div className="w-full aspect-video md:h-96 rounded-md overflow-hidden">
             <MapComponent Center={Center} Marcadores={Marcadores} zoom={12}/> 
             
            </div>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center text-center text-sm font-extrabold text-black sm:text-md md:text-lg lg:text-xl">
                <p className="mb-4 md:mb-0 md:px-8">
                  Actualmente contamos con <br className="md:hidden"/> {Cantidad} busqueda{Cantidad !== 1 ? 's' : ''} activa{Cantidad !== 1 ? 's' : ''}.<br /> Ayudanos a encontrar a estas mascotas!
                </p>
                <a href="#" className="rounded-md bg-yellow-HomeButtton w-48 h-16 not-italic text-black font-extrabold text-base flex flex-col justify-center">
                  Explorar más
                </a>
            </div>   
        </div>
    )


}