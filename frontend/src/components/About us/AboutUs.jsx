import React, { useEffect, useState } from "react";
import gaston from "../../assets/gaston.jpeg";
import CardAboutUs from "../card/CardAboutUs";

export default function AboutUs() {

  return (
    <>
    <div className="max-w-7xl mx-auto my-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">

            <CardAboutUs 
            name={"Gastón"}
            git={"github"}
            image={gaston}
            link={"linkedin"}
            />
            <CardAboutUs 
            name={"Gastón"}
            git={"github"}
            image={gaston}
            link={"linkedin"}
            />
            <CardAboutUs 
            name={"Gastón"}
            git={"github"}
            image={gaston}
            link={"linkedin"}
            />
            <CardAboutUs 
            name={"Gastón"}
            git={"github"}
            image={gaston}
            link={"linkedin"}
            />
            <CardAboutUs 
            name={"Gastón"}
            git={"github"}
            image={gaston}
            link={"linkedin"}
            />
            <CardAboutUs 
            name={"Gastón"}
            git={"github"}
            image={gaston}
            link={"linkedin"}
            />
      </div>
    
    </div>
    
    </>
  );
}
