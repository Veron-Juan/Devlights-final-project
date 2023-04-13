import { useEffect, useState } from "react";
import iconoFoto from "../../assets/iconoFoto.png";
import { PostButton } from "./PostButton";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as servicePosts from "../../services/postService";
import MapComponent from "../MapComponent/MapComponent";


export function PostFormEditor(props) {
  const { name, lastname, createdAt, _id } = useSelector((state) => state.user);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionLoc, setSelectedOptionLoc] = useState('');
  const params = useParams()

  const initialState = {
    name: "",
    contact: "",
    location: "",
    petType: "",
    description: "",
    latitude: 0,
    longitude: 0,
  };

  const [inputs, setInputs] = useState(initialState);

  const [datos, setDatos] = useState([])

  
  function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
       arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
 }

  useEffect(() => {
    const loadPost = async ()=> {
      const res = await servicePosts.getPostById(params.postId);
      try{
        const data = res.data
        console.log("loadPost res",data)
        const {name, img, contact, location,  petType, description,latitude, longitude} = res.data.publication;
        setInputs({name, contact, location, petType, description,latitude, longitude});
        setCenter ({lat: latitude, lng: longitude})
        setMarcadores([
          {
            id: 1,
            position: {
              lat: latitude,
              lng: longitude,
            },
          },
        ]);
        setSelectedOption({petType});
        //proceso de imagen
        datos.map((i) => {
          const base64String = btoa(
            new Uint8Array(i.img.data.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );     
        })
        setImgPreview(`data:image/png;base64,${toBase64(data.publication.img.data.data)}`)
        console.log(latitude, longitude)
      } catch(error) {
        console.log(error)
      } 
    }
    loadPost()
  }, []);
  const [imgFile, setImgFile] = useState();
  const [imgPreview, setImgPreview] = useState();

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSelectChange = (event) => {
    console.log(event);
    setSelectedOption(event.target.value);
    inputs.petType = event.target.value;
  };

  const handleSelectChangeLoc = (event) => {
    setSelectedOptionLoc(event.target.value);
    inputs.location = event.target.value;
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
    inputs.latitude = Center.lat;
    inputs.longitude = Center.lng;
    console.log(inputs)
    event.preventDefault();
    const updatePost = async () => {
      const res = await servicePosts.updatePost(params.postId, inputs);
      try {
        console.log(res.data);
        navigate(`/userPosts`, { replace: true });
      } catch (error) {
        console.log(error);
      }
    };
    updatePost();
  };

  const handleDeletePost = (event) =>{
    event.preventDefault();
    let isDelete = window.confirm(`¿de verdad deseas eliminar el post?`)
    if(isDelete){
      const deletePost = async () =>{
        const res = await servicePosts.deletePost(params.postId);
        try {
          console.log(res.data);
          navigate(`/userPosts`, { replace: true });
        } catch (error) {
          console.log(error);
        }
      };
      deletePost();
    }
  };

  

  
  const [Center , setCenter] = useState({ 
    lat: 0,
    lng: 0,
  })
  
  const [Marcadores, setMarcadores] = useState([
    {
      id: 1,
      position: {
        lat: 0,
        lng: 0,
      },
    },
  ]);



  

  return (
    <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 w-full">
      <form className="my-10 flex-col" onSubmit={handleSubmit}>
        <h1 className="mb-8 font-extrabold text-2xl sm:text-3xl">
          Editar aviso
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
            <ul className="grid w-full gap-6 md:grid-cols-2 mb-10">
              <li>
                <input type="radio" id="perro" name="petType" value="perro" className="hidden peer" 
                checked={inputs.petType === "perro"} onChange={handleSelectChange}
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
                checked={inputs.petType === "gato"} onChange={handleSelectChange}
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
                  className="mb-3 mt-2 mx-auto aspect-square"
                  title=""
                />
              </label>
              <div class="flex p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 " role="alert">
                 <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">Aviso!</span> Para cambiar la foto debe eliminar el post y crear uno nuevo.
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Localidad */}
            <p className="text-sm text-gray-600 mb-4">Localidad:</p>
            <ul className="grid w-full gap-6 md:grid-cols-2 mb-8">
              <li>
                <input type="radio" id="Corrientes" name="location" value="Corrientes" className="hidden peer" 
                checked={inputs.location === "Corrientes"} onChange={handleSelectChangeLoc}
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
                checked={inputs.location === "Resistencia"} onChange={handleSelectChangeLoc}
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

            <div className="w-full aspect-video">
                <MapComponent 
                Center={Center} 
                Marcadores={Marcadores} 
                selecionMarcador={true} 
                setCenter={setCenter} 
                zoom={14}/>
            </div>

            
          </div>
          <div className="md:col-start-2 flex justify-end flex-col sm:flex-row gap-6">
            <button className="rounded-md bg-green text-white font-extrabold px-8 py-5 uppercase tracking-wider" 
            type="submit">
              Actualizar
            </button>
            <button className="rounded-md bg-red text-white font-extrabold px-8 py-5 uppercase tracking-wider" 
              type="button" 
              onClick={handleDeletePost}
            >
              Eliminar
            </button>
              
            </div>
        </div>
      </form>
    </div>
  );
}