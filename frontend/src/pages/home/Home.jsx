import { HomeBody } from "../../components/home/HomeBody";
import { HomeHero } from "../../components/Home/HomeHero";
import { useSelector } from "react-redux";

export default function Home() {
  const { name } = useSelector((state) => state.user);
  return (
    <div className="h-[calc(100vh-90px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-4xl text-center">Bienvenido {name} </p>
      <div className="grid grid-cols-2 gap-3 text-black ">
        <HomeBody />
        <HomeHero />
      </div>
    </div>
  );
}
