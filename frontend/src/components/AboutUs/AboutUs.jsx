import React from "react";
import gaston from "../../assets/gaston.jpeg";
import lucas from "../../assets/lucas.jpg";
import matias from "../../assets/matias.jpg";
import santiago from "../../assets/santiago.jpg";
import juan from "../../assets/juan.jpg";
import roxana from "../../assets/roxana.jpg";

import CardAboutUs from "../card/CardAboutUs";

export default function AboutUs() {

  return (
  <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8 w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <CardAboutUs 
      name={"Juan"}
      petName={"Simon"}
      image={juan}
      linkedin={"juanvp7"}
      github={"Veron-Juan"}
      />
      <CardAboutUs 
      name={"Santiago"}
      petName={"Tom"}
      image={santiago}
      linkedin={"santiagotoledo"}
      github={"santi-san"}
      />
      <CardAboutUs 
      name={"Lucas"}
      petName={"Coco"}
      image={lucas}
      linkedin={"lucas-gauna-lesteyme-919ba2232"}
      github={"Luc4sG"}
      />
      <CardAboutUs 
      name={"Matias"}
      petName={"Mia"}
      image={matias}
      linkedin={"matias-benites"}
      github={"Matiasbenites"}
      />
      <CardAboutUs 
      name={"Roxana"}
      petName={"Chubby"}
      image={roxana}
      linkedin={"roxanaegarcia"}
      github={"RoxanaGarcia"}
      />
      <CardAboutUs 
      name={"Gastón"}
      petName={"Wilson"}
      image={gaston}
      linkedin={"gastón-alegre-88b094256"}
      github={"GastoNahuel"}
      />
    </div>
  </div>
  );
}
