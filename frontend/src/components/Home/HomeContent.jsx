import { HomeButton } from "./HomeButton";

export function HomeContent() {
  return (
    <div className="my-auto">
        <h1 className="text-xl md:text-4xl font-extrabold not-italic text-black w-auto h-97">
        Encuentra tu mascota fácil y rápido con nuestra app!!
        </h1>
        <p className=" mt-[25px] not-italic w-592 h-206 left-147 top-401 font-normal text-lg md:text-2xl text-black">
        +Cotas easdadsadss una amplia comunidad que tiene como objetivo ayudarnos a
        encontrar a nuestros compañeros ,,,, completar con la mision objetivo
        etc de la pagina
        </p>
        <div className="flex-row mt-[35px] lg:mt-[100px] flex justify-around text-center text-base md:text-xl font-extrabold text-black">
            <p className="flex justify-center items-center">
                ¿Perdiste a tu mascota?
            </p>
            <HomeButton />
        </div>
        </div>
  );
}
