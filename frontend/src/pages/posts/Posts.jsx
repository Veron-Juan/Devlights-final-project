import React from "react";
import Card from "../../components/card/Card";

export default function Posts() {
  return (
    <div  
    
    className="flex  py-20  justify-center  ">
    <div className="mr-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:grid-cols-4">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    
    {/* <div className="w-[190px] h-[230px] bg-blue" ></div> */}
      {/* <main className="flex justify-center mx-auto  w-[1300px] mt-20  h-full   ">
        
        <div className="grid grid-cols-2 place-items-center">
        {/* <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4   bg-orange w-[800px]  h-[500px]">
            <Card/>
            <Card/>
            <Card/>
        </div> */}
        
        
        
      
    </div>
  );
}
