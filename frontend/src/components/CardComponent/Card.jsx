import React,{useState,useEffect} from "react";
import ModalCard from "./ModalCard";

const urlImage = "https://img.freepik.com/vector-premium/perfil-hombre-dibujos-animados_18591-58482.jpg?w=2000"
const urlPost = "https://estaticos-cdn.prensaiberica.es/clip/823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg"


const CardComponent =(props) => {
    const [showModal, setShowModal] = useState(false);
   
    const handleOpenModal = () => {
      setShowModal(true);
    };


    const lista = [
        {
        nombreUser: 'Juan',
        tituloPost: 'Perro perdido',
        ubicacionPost:  'Camba Cua Park',
        descripcionPost: 'Hola, mi perro se perdió ayer en la calle 123, si lo ven por favor contactarme al 123456789',
        latitudPost: -27.465038847067884, 
        longitudPost: -58.84456631035704,
        fechaPost: '12/12/2021'},
        {
        nombreUser: 'Pedro',
        tituloPost: 'Gato Perdido',
        ubicacionPost:  'Mitre Park',
        descripcionPost: 'Hola, mi gato se perdió ayer en la calle 123, si lo ven por favor contactarme al 123456789',
        latitudPost: -27.460374137170163, 
        longitudPost: -58.828945125378276,
        fechaPost: '12/12/2021'},
      ]

   
    
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
                <button className="text-black bg-orange rounded-md p-1" onClick={handleOpenModal}>Ver mas</button>
            </div>
        </div>
        {showModal &&
          <ModalCard 
          nombreUser={props.nombreUser} 
          imgUser={urlImage} 
          tituloPost={props.tituloPost} 
          descripcionPost={props.descripcionPost} 
          imgPost={urlPost} ubicacionPost={props.ubicacionPost} 
          fechaPost={props.fechaPost} 
          latitudPost={props.latitudPost} 
          longitudPost={props.longitudPost}          
          handleCloseModal={() => setShowModal(false)}
          />
      }
    </>
    );
}


export default CardComponent;

