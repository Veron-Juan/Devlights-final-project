import { Link } from "react-router-dom";
export function HomeContent(){
    return(
        <div className="flex flex-col justify-around">
            <div className="mb-8 md:mb-0">
                <h1 className="text-2xl md:text-4xl font-extrabold text-black mb-6">
                Con nuestra app, encontrar tu mascota es fácil y rápido.
                </h1>
                <p className="font-normal text-xl
                md:text-2xl text-black">
Sabemos lo importante que son las mascotas para sus dueños y lo angustiante que puede ser no saber dónde están. Por eso, ofrecemos una plataforma digital donde se puede reportar la desaparición de una mascota o buscar entre las publicaciones de otras personas que también buscan a sus animales y contactar con ellas para facilitar el reencuentro.
                </p>
            </div>
            <div className="flex justify-around text-center text-base md:text-xl font-extrabold text-black ">
                <p className="flex justify-center items-center">
                    ¿Perdiste tu mascota?
                </p>
                <Link to="/upload" className="rounded-md bg-yellow-HomeButtton w-48 h-16 not-italic text-black font-extrabold text-base flex flex-col justify-center">
                  Publicar un Aviso
                </Link>
            </div>
        </div>
    );
}