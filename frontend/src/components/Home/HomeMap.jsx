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
          } catch(error) {
            console.log(error)
          } 
        };
        loadMarcadores();
      }, []);
      
   
    return (
        <div className="flex flex-col  items-center mx-auto" data-aos="fade-up">
            <div className="w-[80vw] h-[30vw] rounded-md overflow-hidden  ">
             <MapComponent Center={Center} Marcadores={Marcadores} zoom={12}/> 
             
            </div>
            <div className="mt-2 flex flex-row text-center text-base font-extrabold text-black sm:text-md md:text-lg lg:text-xl ">
                <p className="flex justify-center items-center px-8">
                  Actualmente contamos con {Cantidad} busquedas activas.<br/> Ayudanos a encontrar a estas mascotas!
                </p>
                <a href=""><button className="rounded-md justify-between bg-yellow-HomeButtton HomeButton 
    w-48 h-16 left-495 top-687 not-italic text-black font-extrabold text-base" type="button">
        Explorar más
    </button></a>
            </div>   
        </div>
    )


}