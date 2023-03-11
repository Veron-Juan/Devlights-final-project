import hero from "../../assets/HomeHero.png"
export function HomeHero(){
    // return <img  className="h-screen flex flex-col mt-[110px]" src={hero} alt=""></img>
    return <img  className="max-w-2xl ml-7 hidden lg:block relative h-full flex-1 " src={hero} alt=""></img>
}