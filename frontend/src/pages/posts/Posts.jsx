import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";

export default function Posts() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/posts')
      .then(res => res.json())
      .then(data => {
        setData(data)
        data.map((i) => {
          const base64String = btoa(
            new Uint8Array(i.img.data.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          ); 
          setPrueba(`data:image/png;base64,${base64String}`);
          
        }) 
      })
      .catch((err) => console.log(err));
  }, []);

  function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
       arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
 }

  return (
    <div  
    className="flex  py-20  justify-center  ">
    <div className="mr-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:grid-cols-4">
    {data.map((i)=>{
      return(
        <Card
        name={i.name}
        contact={i.contact}
        image={`data:image/png;base64,${toBase64(i.img.data.data)}`}
        />
      )
    })}
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
