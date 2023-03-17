import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import iconoFoto from "../../assets/iconoFoto.png"
import imagenPrev from "../../assets/imgPreview.png"
import { PostButton } from "./PostButton";

export function PostForm(){
    const [imgFile, setImgFile] = useState();
    const [imgPreview, setImgPreview] = useState(imagenPrev);
   
    function onFormSubmit(event){
        event.preventDefault();

        if(imagenPrev === imgPreview){
            alert("Debe enviar una foto de la mascota");
        }

    }

    const OnImgChange = (event)=> {
            event.preventDefault();
            const image = event.target.files[0];
            if(image.type.includes('image')){
                const reader = new FileReader()
                reader.readAsDataURL(image)

                reader.onload = function() {
                    setImgPreview(reader.result)
                }
                setImgFile(image);
            }else{
                console.log("Hubo un errorcito")
            }   
    }
    
    

    return(
        <form  className="flex mt-[150px] flex-col font-['Montserrat'] not-italic " onSubmit={onFormSubmit}>
            <h1 className=" flex mb-[10px] font-extrabold text-4xl">Publicar un aviso</h1>
            <hr className=" mb-[50px]"></hr>
            <label className="font-extrabold  text-4xl">Nombre de la mascota</label>
            <div className="mb-[20px] border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 
            py-2  w-[49%] ">
                <input className="mt-[10px] bg-white rounded-md" type="text" id="name" name="name"></input>
            </div>
            <label className="font-medium text-xl items-end">Numero de contacto:</label>
            <div className="mb-[20px] border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400
            py-2  w-[49%] ">
                <input className="mt-[10px] bg-white rounded-md" type="text" id="contact" name="contact"></input>
            </div>
            <label className=" font-medium text-xl items-end">Descripcion detallada:</label><br/>
            <div className="mb-[30px] border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 
            py-2  lg:w-[93%] lg:w-[89%] md:w-[89%] sm:w-[72%] w-[75%] ">
                <textarea className=" mt-[10px] min-h-[100px] w-[310px] lg:min-h-[200px] md:min-w-[385px] 
                lg:min-w-[400px] bg-white rounded-md" type="text"
                 id="description" name="description"></textarea><br/>
            </div>
            <label className="font-medium text-xl items-end ">Zona donde fue visto por ultima vez:</label>
            <div className="mb-[20px] border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 
            py-2  w-[49%] ">
                <input className="mt-[10px] bg-white rounded-md" type="text" id="location" name="location"></input>
            </div>
            <div className=" mt-[30px] flex">
                <div className="p-4 max-w-[100px] max-h-[100px ] flex items-center flex-col">
                    <div className="relative mb-6">
                        <input className="relative z-[2] max-w-[90px] h-[90px]  cursor-pointer border-none 
                        opacity-0" type="file" id="img" name="testImage" onChange={OnImgChange}></input>
                        <button className="absolute flex top-0 left-0 w-full h-full z-[1] justify-center 
                        items-center cursor-pointer outline-none">
                            <i>
                                <img src={iconoFoto} alt="img-button" className=""/>
                            </i>
                    </button>
                    </div>
                </div>
                <img src={imgPreview} alt="imagen" className=" ml-12 rounded-md border-4 border-yellow-200
                 w-[120px] h-[120px] "></img>
            </div>
            <PostButton/>
        </form>
    );
}