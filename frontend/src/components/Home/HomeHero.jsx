import hero from "../../assets/HomeHero.png"
export function HomeHero(){
    // return <img  className="h-screen flex flex-col mt-[110px]" src={hero} alt=""></img>
    return <img  className=" hidden md:block relative h-full flex-1 mt-[110px]" src={hero} alt=""></img>
}