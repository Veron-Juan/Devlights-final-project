import { useState } from "react";
import iconoFoto from "../../assets/iconoFoto.png";
import { PostButton } from "./PostButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as servicePosts from "../../services/postService";
import MapComponent from "../MapComponent/MapComponent";

export function PostForm() {
  const { name, lastname, createdAt, _id } = useSelector((state) => state.user);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionLoc, setSelectedOptionLoc] = useState('');
  const [selectedOptionStatus, setSelectedOptionStatus] = useState('');
  const [imgFile, setImgFile] = useState();
  const [imgPreview, setImgPreview] = useState(iconoFoto);

  const navigate = useNavigate();

  const initialState = {
    name: "",
    testImage: null,
    contact: "",
    location: "",
    petType: "",
    description: "",
    user_id: _id,
    nameUser: name,
    lastnameUser: lastname,
    createdAt: createdAt,
    latitude: 0,
    longitude: 0,
    status: "",
  };
  console.log("userID: ",_id)
  console.log("name: ", name)

  const [inputs, setInputs] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectChangeLoc = (event) => {
    setSelectedOptionLoc(event.target.value);
  };

  const handleSelectChangeStatus = (event) => {
    setSelectedOptionStatus(event.target.value);
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
    formData.append("petType", selectedOption);
    formData.append("location", selectedOptionLoc);
    formData.append("description", inputs.description);
    formData.append("user_id", inputs.user_id);
    formData.append("nameUser", inputs.nameUser);
    formData.append("lastnameUser", inputs.lastnameUser);
    formData.append("createdAt", inputs.createdAt);
    formData.append("latitude", Center.lat);
    formData.append("longitude", Center.lng);
    formData.append("status", selectedOptionStatus);

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

  const [Center, setCenter] = useState({
    lat: -34.603722,
    lng: -58.381592,
  });

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
    } else {
      void 0;
    }
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  if ("geolocation" in navigator)
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  return (
    <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 w-full">
      <form className="my-10 flex-col" onSubmit={handleSubmit}>
        <h1 className="mb-8 font-extrabold text-2xl sm:text-3xl">
          Publicar un aviso
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white px-4 py-6 rounded-lg shadow-lg">
          <div>
            {/* nombre mascota */}
            <div className="relative z-0 w-full mb-8 group">
              <input 
                type="text"
                name="name"
                id="name" 
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none 
                text-gray-900 border-yellow-300 focus:border-yellow-400 focus:outline-none focus:ring-0 peer" 
                placeholder="" 
                required 
                onChange={handleInputChange}
                value={inputs.name}
              />
              <label 
                htmlFor="name" 
                className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                Nombre de la mascota
              </label>
            </div>

            {/* Numero contacto */}
            <div className="relative z-0 w-full mb-8 group">
              <input 
                type="text"
                name="contact"
                id="contact" 
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none 
                text-gray-900 border-yellow-300 focus:border-yellow-400 focus:outline-none focus:ring-0 peer" 
                placeholder="" 
                required 
                onChange={handleInputChange}
                value={inputs.contact}
              />
              <label 
                htmlFor="contact" 
                className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                Numero de contacto
              </label>
            </div>

            {/* Tipo mascota */}
            <p className="text-sm text-gray-600 mb-4">Es un:</p>
            <ul className="grid w-full gap-6 md:grid-cols-2 mb-8">
              <li>
                <input type="radio" id="perro" name="petType" value="perro" className="hidden peer" 
                onChange={handleSelectChange}
               />
                <label htmlFor="perro" className="flex items-center justify-center w-full p-5 
                border rounded-lg cursor-pointer 
                hover:text-gray-300
                border-gray-700
                peer-checked:text-yellow-500 peer-checked:bg-gray-800
                text-gray-400
              bg-white 
                hover:bg-gray-700 text-lg font-semibold">
                  <i className="fa-solid fa-dog mr-2"></i>Perro
                </label>
              </li>
              <li>
                <input type="radio" id="gato" name="petType" value="gato" className="hidden peer" 
                onChange={handleSelectChange}
               />
                <label htmlFor="gato" className="flex items-center justify-center w-full p-5 
                border rounded-lg cursor-pointer 
                hover:text-gray-300
                border-gray-700
                peer-checked:text-yellow-500 peer-checked:bg-gray-800
                text-gray-400
              bg-white 
                hover:bg-gray-700 text-lg font-semibold">
                  <i className="fa-solid fa-dog mr-2"></i>Gato
                </label>
              </li>
            </ul>

            {/* Descripcion */}
            <div className="relative z-0 w-full mb-8 group">
              <textarea 
                type="text"
                name="description"
                id="description" 
                rows="3"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none 
                text-gray-900 border-yellow-300 focus:border-yellow-400 focus:outline-none focus:ring-0 peer" 
                placeholder="" 
                required 
                onChange={handleInputChange}
                value={inputs.description}
              />
              <label 
                htmlFor="description" 
                className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                >
                  Descripcion del animal
              </label>
            </div>

            {/* image */}
            <div className="relative z-0 w-full mb-8 group">
              <input
                className="hidden peer"
                type="file"
                id="img"
                name="testImage"
                onChange={OnImgChange}
              />
              <label htmlFor="img" className="peer-focus:font-medium text-sm text-gray-400">
                Foto de la mascota:
                <img
                  src={imgPreview}
                  alt="img-button"
                  className="mb-3 mt-2 mx-auto aspect-square sm:h-[300px]"
                  title=""
                />
              </label>
            </div>
          </div>
          <div>
            {/* Localidad */}
            <p className="text-sm text-gray-600 mb-4">Localidad:</p>
            <ul className="grid w-full gap-6 md:grid-cols-2 mb-8">
              <li>
                <input type="radio" id="Corrientes" name="location" value="Corrientes" className="hidden peer" 
                onChange={handleSelectChangeLoc}
               />
                <label htmlFor="Corrientes" className="flex items-center justify-center w-full p-5 
                border rounded-lg cursor-pointer 
                hover:text-gray-300
                border-gray-700
                peer-checked:text-yellow-500 peer-checked:bg-gray-800
                text-gray-400
              bg-white 
                hover:bg-gray-700 text-lg font-semibold">
                  Corrientes
                </label>
              </li>
              <li>
                <input type="radio" id="Resistencia" name="location" value="Resistencia" className="hidden peer"
                onChange={handleSelectChangeLoc}
               />
                <label htmlFor="Resistencia" className="flex items-center justify-center w-full p-5 
                border rounded-lg cursor-pointer 
                hover:text-gray-300
                border-gray-700
                peer-checked:text-yellow-500 peer-checked:bg-gray-800
                text-gray-400
              bg-white 
                hover:bg-gray-700 text-lg font-semibold">
                  Resistencia
                </label>
              </li>
            </ul>

            {/* Mapa */}
            <p className="text-sm text-gray-600 mb-4">
              Arrastre en el mapa a la ubicación donde fue visto por ultima vez:
            </p>
            <div className="w-full aspect-video mb-4">
              <MapComponent
                Center={Center}
                Marcadores={Marcadores}
                selecionMarcador={true}
                setCenter={setCenter}
                zoom={14}
                form={true}
              />
            </div>

            {/* Status */}
            <p className="text-sm text-gray-600 mb-4">Estado:</p>
            <ul className="grid w-full gap-6 md:grid-cols-2 mb-8">
              <li>
                <input type="radio" id="se busca" name="status" value="se busca" className="hidden peer" 
                onChange={handleSelectChangeStatus}
               />
                <label htmlFor="se busca" className="flex items-center justify-center w-full p-5 
                border rounded-lg cursor-pointer 
                hover:text-gray-300
                border-gray-700
                peer-checked:text-yellow-500 peer-checked:bg-gray-800
                text-gray-400
              bg-white 
                hover:bg-gray-700 text-lg font-semibold">
                  Se busca
                </label>
              </li>
              <li>
                <input type="radio" id="se encontro" name="status" value="se encontro" className="hidden peer"
                onChange={handleSelectChangeStatus}
               />
                <label htmlFor="se encontro" className="flex items-center justify-center w-full p-5 
                border rounded-lg cursor-pointer 
                hover:text-gray-300
                border-gray-700
                peer-checked:text-yellow-500 peer-checked:bg-gray-800
                text-gray-400
              bg-white 
                hover:bg-gray-700 text-lg font-semibold">
                  Se encontro
                </label>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 mx-auto w-full text-center">
            <PostButton />
          </div>
        </div>
      </form>
    </div>
  );
}
