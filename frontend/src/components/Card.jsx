import React,{useState} from "react";
import Map from "./MapComponent";
const urlImage = "https://img.freepik.com/vector-premium/perfil-hombre-dibujos-animados_18591-58482.jpg?w=2000"
const urlPost = "https://estaticos-cdn.prensaiberica.es/clip/823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg"
//using tailwind
// const Card =(props) => {
//     return (
//         <div className="bg-[#ecfeff] h-fit w-72 flex flex-col ">
//             <div className= "h-fit w-full flex flex row">
//                 <image src={props.imgUser} alt="imagen de perfil" className="h-20 w-20 rounded-full" /> 
//                 <p className="text-2xl text-black font-bold">{props.nombreUser}</p>
//             </div>
//             <image src={props.imgPost} alt="imagen del post" className="h-20 w-20 " />
//             <div className="h-fit w-full bg-blue flex flex-col justify-center">
//                 <p className="text-2xl text-black font-bold">{props.tituloPost}</p>
//                 <p className="text-xl text-black font-bold">{props.ubicacion}</p>
//             </div>
//         </div>
//     );
// }

const Card =(props) => {
    const [showModal, setShowModal] = useState(false);
    
    return(
    <>
        <div className="container flex flex-col bg-white rounded-md max-w-sm h-auto w-72 mx-2">
            <div className="flex flex-row h-auto">
                <img src={urlImage} className="h-5 w-5 rounded-full my-2 mx-1 "/>
                <p className="font-semibold text-black my-1.5">{props.nombreUser}</p>
            </div>
            <img src={urlPost} className=""/>
            <div>
                <p className="font-bold text-black my-2 mx-1">{props.tituloPost}</p>
                <p className="text-black my-2 mx-1 text-sm">{props.ubicacionPost}</p>
                <button className="text-black bg-orange rounded-md p-1" onClick={() => setShowModal(true)}>Ver mas</button>
            </div>
        </div>
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-row w-full  outline-none focus:outline-none">
                {/* Parte izquierda */}
                <div className="flex flex-col">
                  asdaaaaaaaaaaaaaaaaaa
                    <Map location={location} zoomLevel={17}/>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
    );
}


export default Card;