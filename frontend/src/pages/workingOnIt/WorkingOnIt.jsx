import React from "react";
import hero from "../../assets/enProcesoHero.png"

export default function WorkingOnIt() {
    return (
    <div className="relative"> 
    <img className="hero-work mx-auto  md:block  drop-shadow-[5px_5px_5px_rgba(0,0,0,0.23)]" src={hero} alt=""/>
    <p className="absolute  inset-y-0">Estamos trabajando<br/>El sitio estará listo pronto</p>
    </div>
    )
}