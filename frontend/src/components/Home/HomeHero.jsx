import hero from "../../assets/HomeHero.png"
export function HomeHero(){
    // return <img  className="h-screen flex flex-col mt-[110px]" src={hero} alt=""></img>
    return <img className="hero-home hidden md:block" src={hero} alt=""></img>
}