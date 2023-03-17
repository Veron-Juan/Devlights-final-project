import { HomeHero } from "../../components/Home/HomeHero";
import { useSelector } from "react-redux";
import { HomeContent } from "../../components/Home/HomeContent";

export default function Home() {
  const { name } = useSelector((state) => state.user);
  return (
    <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-[calc(100%_-_90px)]">
      <p className="text-lg md:text-4xl text-center">Bienvenido {name} </p>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-3 text-black ">
        <HomeContent />
        <HomeHero />
      </div>
    </div>
  );
}
