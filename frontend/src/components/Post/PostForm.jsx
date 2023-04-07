import { useState } from "react";
import iconoFoto from "../../assets/iconoFoto.png";
import { PostButton } from "./PostButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as servicePosts from "../../services/postService";
import MapComponent from "../MapComponent/MapComponent";


export function PostForm() {
  const { name, lastname, createdAt } = useSelector((state) => state.user);

  const [imgFile, setImgFile] = useState();
  const [imgPreview, setImgPreview] = useState(iconoFoto);

  const navigate = useNavigate();

  const initialState = {
    name: "",
    testImage: null,
    contact: "",
    location: "",
    description: "",
    nameUser: name,
    lastnameUser: lastname,
    createdAt: createdAt,
    latitude: 0,
    longitude: 0,
  };

  const [inputs, setInputs] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const OnImgChange = (event) => {
    
    event.preventDefault();
    const image = event.target.files[0];
    if (image.type.includes("image")) {
      const reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onload = function () {
        setImgPreview(reader.result);
      };
      setImgFile(image);
      setInputs({ ...inputs, testImage: event.target.files[0] });
    } else {
      console.log("Hubo un errorcito");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("testImage", inputs.testImage);
    formData.append("contact", inputs.contact);
    formData.append("location", inputs.location);
    formData.append("description", inputs.description);
    formData.append("nameUser", inputs.nameUser);
    formData.append("lastnameUser", inputs.lastnameUser);
    formData.append("createdAt", inputs.createdAt);
    formData.append("latitude", Center.lat);
    formData.append("longitude", Center.lng);

    const uploadPost = async () => {
      const res = await servicePosts.createPost(formData);
      try {
        console.log(res.data);
        //modal o page que desee suerte en su búsqueda
        navigate(`/posts`, { replace: true });
      } catch (error) {
        console.log(error);
      }
    };
    uploadPost();
  };

  
  const [ubicState, setUbicState] = useState(true);
  
  const [Center , setCenter] = useState({ 
    lat: -34.603722,
    lng: -58.381592,
  })
  
  const [Marcadores, setMarcadores] = useState([
    {
      id: 1,
      position: {
        lat: -34.603722,
        lng: -58.381592,
      },
    },
  ]);

  const successCallback = (position) => {
    if (ubicState) {
    const { latitude, longitude } = position.coords;
    setCenter({ lat: latitude, lng: longitude });
    setMarcadores([
      {
        id: 1,
        position: {
          lat: latitude,
          lng: longitude,
        },
      },
    ]);
    setUbicState(false);
    } else {void(0)}  
  };

  const errorCallback = (error) => {
    console.log(error);
  };
  
  if ("geolocation" in navigator) navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  return (
    <form
      className="mt-4 mx-2 sm:mt-10 flex-col font-['Montserrat'] not-italic "
      onSubmit={handleSubmit}
    >
      <h1 className="mb-2 font-extrabold text-3xl sm:text-3xl min-w-full sm:mx-[10vw]">
        Publicar un aviso
      </h1>
      <hr className="mb-8 sm:mx-[10vw]"></hr>

    <div className="flex flex-col  sm:flex-row w-fit mx-auto">
      <div className="flex flex-col sm:w-1/2">
        <label className="mb-2 font-medium  text-2xl sm:text-3xl">
          Nombre de la mascota
        </label>
        <div className="mb-2 w-fit border-b-4 border-b-yellow-200">
        <input
            className="mb-2 focus:border-yellow w-[50vw] bg-white-black rounded-md px-1 text-lg sm:w-[30vw]"
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleInputChange}
        /> </div>
        

        <label className="mb-2 font-medium text-2xl sm:text-3xl">
          Numero de contacto:
        </label>
        
        <div className="mb-2 w-fit border-b-4 border-b-yellow-200">
          <input
            className="mb-2 focus:border-yellow w-[50vw] bg-white-black rounded-md px-1 text-lg sm:w-[30vw]"
            type="text"
            id="contact"
            name="contact"
            value={inputs.contact}
            onChange={handleInputChange}
          />  
        </div>
        
        <label className="mb-2 font-medium text-2xl sm:text-3xl">
          Descripcion detallada:
        </label>
        
        <div
          className="mb-2 w-fit border-b-4 border-b-yellow-200"
        >
          <textarea
            className=" min-h-[20vh] min-w-[85vw] mb-2 focus:border-yellow  bg-white-black rounded-md p-1 text-lg sm:min-w-[35vw] sm:mr-5"
            type="text"
            id="description"
            name="description"
            value={inputs.description}
            onChange={handleInputChange}
          />
          
        </div>

        <div className="mb-2 w-[100vw] border-b-4 border-b-yellow-200 sm:w-[30vw]">
          <input
              className="w-0 h-0 cursor-pointer border-none "
              type="file"
              id="img"
              name="testImage"
              onChange={OnImgChange}
          />
          <label className="mb-2 w-auto font-medium text-2xl sm:text-3xl" htmlFor="img">
            Foto de la mascota:
                  {/* hay un problema con el margin pq la imagen esta dentro del div y no esta bien centrada ni idea como resolver */}
                  <img src={imgPreview} alt="img-button" className="mb-3 mt-2 mx-auto w-[35vw] h-[35vw] object-cover sm:w-[20vw] sm:h-[20vw]" title=""/>
                  {/* <button className="relative top-0 inset-x-auto w-10 h-10 bg-yellow-300 rounded-full text-2xl font-bold text-white group-hover:bg-yellow-400 transition duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-110"/> */}
            
          </label>
          
          
        </div>
      </div>
      <div className="flex flex-col sm:w-1/2 w-fit">
        <label className="mb-2 font-medium text-2xl sm:text-3xl">
          Zona donde fue visto por ultima vez
        </label>
        
        <div className="mb-2 w-fit border-b-4 border-b-yellow-200">
          <input
            className="mb-2 focus:border-yellow w-[50vw] bg-white-black rounded-md px-1 text-lg sm:w-[30vw]"
            type="text"
            id="location"
            name="location"
            value={inputs.location}
            onChange={handleInputChange}
          />
        </div>

        <label className="mb-2 font-medium text-md sm:text-lg">
          Arrastre en el mapa a la ubicacion donde fue visto por ultima vez:
        </label>

        <div className="mx-auto w-[90vw] h-[90vw] sm:w-[60vh] sm:h-[60vh]">
            <MapComponent Center={Center} Marcadores={Marcadores} selecionMarcador={true} setCenter={setCenter}/>
        </div>

        <div className="mx-auto w-fit">
          <PostButton/></div>
        </div>
      </div>
    </form>
  );
}