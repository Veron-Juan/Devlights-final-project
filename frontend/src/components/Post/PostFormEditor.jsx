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

  
  const [ubicState, setUbicState] = useState(true);
  
  const [Center , setCenter] = useState({ 
    lat: Number(inputs.latitude),
    lng: Number(inputs.longitude),
  })
  
  const [Marcadores, setMarcadores] = useState([
    {
      id: 1,
      position: {
        lat: Number(inputs.latitude),
        lng: Number(inputs.longitude),
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
            Tipo de Mascota:
          </label>

          <div className="mb-2 w-fit p-[5px]">
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value={inputs.petType}>
                {inputs.petType}
              </option>
              <option name="petType" value="perro">
                perro
              </option>
              <option name="petType" value="gato">
                gato
              </option>
            </select>
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
          <label className="mb-2 w-auto font-medium text-2xl sm:text-3xl" htmlFor="img">
            Foto de la mascota:
                  {/* hay un problema con el margin pq la imagen esta dentro del div y no esta bien centrada ni idea como resolver */}
                  <img src={imgPreview} alt="img-button" className="mb-3 mt-2 mx-auto w-[35vw] h-[35vw] object-cover sm:w-[20vw] sm:h-[20vw]" title=""/>
                  {/* <button className="relative top-0 inset-x-auto w-10 h-10 bg-yellow-300 rounded-full text-2xl font-bold text-white group-hover:bg-yellow-400 transition duration-300 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-110"/> */}
            
          </label>
          <p>
              Aviso: Para cambiar la foto debe eliminar el post y crear uno nuevo
          </p>
          
          
        </div>
      </div>
      <div className="flex flex-col sm:w-1/2 w-fit">
          <label className="mb-2 font-medium text-2xl sm:text-3xl">
            Localidad:
          </label>
          <div className="mb-2 w-fit p-[5px]">
            <select value={selectedOptionLoc} onChange={handleSelectChangeLoc}>
              <option value={inputs.location}>
                {inputs.location}
              </option>
              <option
                name="location"
                value="Corrientes"
              >
                Corrientes
              </option>
              <option
                name="location"
                value="Resistencia"
              >
                Resistencia
              </option>
            </select>
          </div>

        <label className="mb-2 font-medium text-md sm:text-lg">
          Arrastre en el mapa a la ubicacion donde fue visto por ultima vez:
        </label>

        <div className="mx-auto w-[90vw] h-[90vw] sm:w-[60vh] sm:h-[60vh]">
            <MapComponent Center={Center} Marcadores={Marcadores} selecionMarcador={true} setCenter={setCenter}/>
        </div>

        <div className="mx-auto w-fit ">
        <button 
          className=" mr-[40px] mt-[30px] rounded-md justify-between bg-red HomeButton 
          w-48 h-16 left-495 top-687 font-[Roboto] not-italic text-black font-extrabold text-base " 
          type="button" 
          onClick={handleDeletePost}
        >
          Eliminar
        </button>
        <button className=" mt-[30px] rounded-md justify-between bg-yellow-HomeButtton HomeButton 
        w-48 h-16 left-495 top-687 font-[Roboto] not-italic text-black font-extrabold text-base " 
        type="submit" >
        Actualizar
    </button>
        </div>
      </div>
    </div>
  </form>
  );
}