import { useState } from "react";
import iconoFoto from "../../assets/iconoFoto.png";
import imagenPrev from "../../assets/imgPreview.png";
import { PostButton } from "./PostButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as servicePosts from "../../services/postService";
import MapComponent from "../MapComponent/MapComponent";

export function PostForm() {
  const { name, lastname, createdAt } = useSelector((state) => state.user);

  const [imgFile, setImgFile] = useState();
  const [imgPreview, setImgPreview] = useState(imagenPrev);

  const navigate = useNavigate();

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
 

  const initialState = {
    name: "",
    testImage: null,
    contact: "",
    location: "",
    description: "",
    nameUser: name,
    lastnameUser: lastname,
    createdAt: createdAt,
    latitude: -34.603722,
    longitude: -58.381592,
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
      setInputs({ ...inputValues, testImage: event.target.files[0] });
    } else {
      console.log("Hubo un errorcito");
    }
  };

  //TODO: enviar mark al backend (latitud y longitud en formato de marcador par avisualizar en las cards)
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
    formData.append("latitude", inputs.latitude);
    formData.append("longitude", inputs.longitude);

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

   
  //Manejo de la ubicacion del mapa
  


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
      className="mt-[85px] flex flex-row font-['Montserrat'] not-italic "
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
          <h1 className="mb-[10px] font-extrabold text-4xl min-w-full">
            Publicar un aviso
          </h1>
          <hr className=" mb-[50px] bg"></hr>
          <label className="font-extrabold  text-4xl">Nombre de la mascota</label>
          <br />
          <div
            className="mb-[10px] border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 
                py-2  w-[49%] "
          >
            <input
              className="mt-[10px] bg-white rounded-md"
              type="text"
              id="name"
              name="name"
              value={inputs.name}
              onChange={handleInputChange}
            ></input>
            <br />
          </div>

        <label className="font-medium text-xl items-end">
          Numero de contacto:
        </label>
        <br />
        <div
          className="mb-[10px] border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400
              py-2  w-[49%] "
        >
          <input
            className="mt-[10px] bg-white rounded-md"
            type="text"
            id="contact"
            name="contact"
            value={inputs.contact}
            onChange={handleInputChange}
          ></input>
          <br />
        </div>
        <label className=" font-medium text-xl items-end">
          Descripcion detallada:
        </label>
        <br />
        <div
          className=" mb-[30px] border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 
          py-2 lg:w-[89%] md:w-[89%] sm:w-[72%] w-[75%]"
        >
          <textarea
            className=" mt-[10px] min-h-[100px] w-[310px] lg:min-h-[200px] md:min-w-[385px] 
            lg:min-w-[400px] bg-white rounded-md"
            type="text"
            id="description"
            name="description"
            value={inputs.description}
            onChange={handleInputChange}
          ></textarea>
          <br />
        </div>
        <label className="font-medium text-xl items-end ">
          Zona donde fue visto por ultima vez:
        </label>
        <br />
        <div
          className="mb-[10px] border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 
              py-2  w-[49%] "
        >
          <input
            className="mt-[10px] bg-white rounded-md"
            type="text"
            id="location"
            name="location"
            value={inputs.location}
            onChange={handleInputChange}
          ></input>
          <br />
        </div>
        <div className=" mt-[30px] flex">
          <div className="p-4 max-w-[100px] max-h-[100px ] flex items-center flex-col">
            <div className="relative mb-6">
              <input
                className="relative z-[2] max-w-[90px] h-[90px]  cursor-pointer border-none 
                          opacity-0"
                type="file"
                id="img"
                name="testImage"
                onChange={(event) =>
                  setInputs({ ...inputs, testImage: event.target.files[0] })
                }
              ></input>
              <button
                className="absolute flex top-0 left-0 w-full h-full z-[1] justify-center 
                          items-center cursor-pointer outline-none"
              >
                <i>
                  <img src={iconoFoto} alt="img-button" className="" />
                </i>
              </button>
            </div>
          </div>
          <img
            src={imgPreview}
            alt="imagen"
            className=" ml-12 rounded-md border-4 border-yellow-200
            w-[120px] h-[120px] "
          ></img>
        </div>
      </div>
        <PostButton />
        <div className="w-[30vw] h-[50vh]">
          <MapComponent Center={Center} Marcadores={Marcadores} selecionMarcador={true} setInputs={setInputs}/>
        </div>
    </form>
  );
}
