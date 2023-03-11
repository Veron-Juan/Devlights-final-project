import { HomeButton } from "./HomeButton";

export function HomeBody(){
    return(
        <div className=" lg:flex-1 flex flex-col max-w-lg">
            <h1 className="text-5xl font-['Montserrat'] font-extrabold not-italic text-black 
            w-auto h-97  ">
                Encuentra tu mascota fácil y rápido con nuestra app reformular!!
            </h1>
            <p className=" mt-[25px] font-['Montserrat'] not-italic w-592 h-206 left-147 top-401 font-normal
            text-2xl text-black">
                +Cotas es una amplia comunidad que tiene como objetivo ayudarnos a encontrar a nuestros
                 compañeros ,,,, completar con la mision objetivo etc de la pagina
            </p>
            <div className="flex-row mt-[75px] lg:mt-[100px] justify-around flex font-['Roboto'] not-italic text-xl font-extrabold text-black ">
                <p className="flex justify-center items-center">
                    ¿Perdiste a tu mascota?
                </p>
                <HomeButton/>
            </div>
        </div>
    );
}