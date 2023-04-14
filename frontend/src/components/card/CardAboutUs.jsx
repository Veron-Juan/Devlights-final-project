import React from "react";

export default function CardAboutUs(props) {
 
  return (
    <>
      <div className="group relative block bg-black min-h-[420px] rounded-lg overflow-hidden">
        <img alt={props.name} src={props.image} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
        <div className="relative p-4 sm:p-6 md:p-8 flex flex-col h-full bg-gradient-to-t from-transparent from-0% via-transparent via-85% to-black to-100%">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
            <i className="fa-solid fa-paw fa-xl mr-2"></i>{props.petName}
          </p>
          <p className="text-xl font-bold text-white sm:text-2xl">
            <i className="fa-solid fa-fingerprint mr-2"></i>{props.name}
          </p>

          <div className="mt-auto">
            <div className="md:translate-y-8 transform md:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex flex-col justify-between gap-3 md:gap-2 text-sm text-white bg-gray-900/75 p-3 sm:p-0 sm:bg-transparent rounded-lg">
              <a href={`https://www.linkedin.com/in/${props.linkedin}`} target="_blank" >
                <i className="fa-brands fa-linkedin fa-xl mr-2"></i>
                {props.linkedin}
              </a>
              <a href={`https://github.com/${props.github}`} target="_blank" >
                <i className="fa-brands fa-github fa-xl mr-2"></i>
                {props.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
