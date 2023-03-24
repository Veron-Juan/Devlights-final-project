import { HomeButton } from "./HomeButton";

export function HomeBody(){
    return(
        <div className="flex flex-col justify-around">
            <div className="mb-8 md:mb-0">
                <h1 className="text-2xl md:text-4xl font-extrabold text-black mb-6">
                    Encuentra tu mascota fácil y rápido con nuestra app reformular!!
                </h1>
                <p className="font-normal text-xl
                md:text-2xl text-black">
                    +Cotas es una amplia comunidad que tiene como objetivo ayudarnos a encontrar a nuestros
                    compañeros ,,,, completar con la mision objetivo etc de la pagina
                </p>
            </div>
            <div className="flex justify-around text-center text-base md:text-xl font-extrabold text-black ">
                <p className="flex justify-center items-center">
                    ¿Perdiste tu mascota?
                </p>
                <HomeButton/>
            </div>
        </div>
    );
}