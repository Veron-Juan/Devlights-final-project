import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import LoaderPosts from "./LoaderPosts";
import * as servicePosts from "../../services/postService";

export default function Posts() {

  // Lógica de filtrado - INICIO
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(true);
  const [isChecked4, setIsChecked4] = useState(true);

  const [checkedValues, setValue] = useState([])

  const probandoFiltro = () => {
    return data.map((i) => {
      return (
        <Card
          name={i.name}
          contact={i.contact}
          image={`data:image/png;base64,${toBase64(i.img.data.data)}`}
          location={i.location}
          description={i.description}
          petType={i.petType}
          nameUser={i.nameUser}
          lastnameUser={i.lastnameUser}
          createdAt={i.createdAt}
          latitudPost={i.latitude}
          longitudPost={i.longitude}
        />
      );
    }
    )
  }


  const datosFiltrados = () => {
    if (checkedValues.length >= 1) {
      return data.map((i) => {
        if (checkedValues.includes(i.petType) && !checkedValues.includes(i.location)) {
          if (i.petType === "perro") {
            return (
              <Card
                name={i.name}
                contact={i.contact}
                image={`data:image/png;base64,${toBase64(i.img.data.data)}`}
                location={i.location}
                description={i.description}
                petType={i.petType}
                nameUser={i.nameUser}
                lastnameUser={i.lastnameUser}
                createdAt={i.createdAt}
                latitudPost={i.latitude}
                longitudPost={i.longitude}
              />
            );
          } else {
            return (
              <Card
                name={i.name}
                contact={i.contact}
                image={`data:image/png;base64,${toBase64(i.img.data.data)}`}
                location={i.location}
                description={i.description}
                petType={i.petType}
                nameUser={i.nameUser}
                lastnameUser={i.lastnameUser}
                createdAt={i.createdAt}
                latitudPost={i.latitude}
                longitudPost={i.longitude}
              />
            )
          }
        } else {
          if (checkedValues.includes(i.location) && !checkedValues.includes(i.petType)) {
            if (i.location === "Corrientes") {
              return (<Card
                name={i.name}
                contact={i.contact}
                image={`data:image/png;base64,${toBase64(i.img.data.data)}`}
                location={i.location}
                description={i.description}
                petType={i.petType}
                nameUser={i.nameUser}
                lastnameUser={i.lastnameUser}
                createdAt={i.createdAt}
                latitudPost={i.latitude}
                longitudPost={i.longitude}
              />)
            } else {
              return (
                <Card
                  name={i.name}
                  contact={i.contact}
                  image={`data:image/png;base64,${toBase64(i.img.data.data)}`}
                  location={i.location}
                  description={i.description}
                  petType={i.petType}
                  nameUser={i.nameUser}
                  lastnameUser={i.lastnameUser}
                  createdAt={i.createdAt}
                  latitudPost={i.latitude}
                  longitudPost={i.longitude}
                />
              )
            }

          } else {
            if (checkedValues.includes(i.petType === "gato")) {
              if (i.location === "Resistencia") {
                return (<Card
                  name={i.name}
                  contact={i.contact}
                  image={`data:image/png;base64,${toBase64(i.img.data.data)}`}
                  location={i.location}
                  description={i.description}
                  petType={i.petType}
                  nameUser={i.nameUser}
                  lastnameUser={i.lastnameUser}
                  createdAt={i.createdAt}
                  latitudPost={i.latitude}
                  longitudPost={i.longitude}
                />)
              } else {
                return (<Card
                  name={i.name}
                  contact={i.contact}
                  image={`data:image/png;base64,${toBase64(i.img.data.data)}`}
                  location={i.location}
                  description={i.description}
                  petType={i.petType}
                  nameUser={i.nameUser}
                  lastnameUser={i.lastnameUser}
                  createdAt={i.createdAt}
                  latitudPost={i.latitude}
                  longitudPost={i.longitude}
                />)
              }
            }
          }
        }
      })
    } else {
      return probandoFiltro();
    }
  }

  const handleOnCheckbox = (e) => {
    setIsChecked(!isChecked);
    const value = e.target.value;
    if (isChecked) {
      setValue(pre => [...pre, value]);
    } else {
      setValue(pre => {
        return [...pre.filter(petType => petType !== value)]
      })
    }
  }

  const handleOnCheckbox2 = (e) => {
    setIsChecked2(!isChecked2);
    const value = e.target.value;
    if (isChecked2) {
      setValue(pre => [...pre, value]);
    } else {
      setValue(pre => {
        return [...pre.filter(petType => petType !== value)]
      })
    }
  }

  const handleOnCheckbox3 = (e) => {
    setIsChecked3(!isChecked3);
    const value = e.target.value;
    if (isChecked3) {
      setValue(pre => [...pre, value]);
    } else {
      setValue(pre => {
        return [...pre.filter(petType => petType !== value)]
      })
    }
  }

  const handleOnCheckbox4 = (e) => {
    setIsChecked4(!isChecked4);
    const value = e.target.value;
    if (isChecked4) {
      setValue(pre => [...pre, value]);
    } else {
      setValue(pre => {
        return [...pre.filter(petType => petType !== value)]
      })
    }
  }

  // Lógica de filtrado - FIN


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const res = await servicePosts.getPosts();
      try {
        const data = res.data;
        console.log(data);
        setData(data);
        setLoading(false);
        //proceso de imagen
        data.map((i) => {
          const base64String = btoa(
            new Uint8Array(i.img.data.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
        });
      } catch (error) {
        console.log(error);
      }
    };
    loadPosts();
  }, []);

  function toBase64(arr) {
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }

  return (
    <>
      <div className="flex flex-row items-center justify-evenly rounded-lg shadow-lg  h-16 mx-auto bg-yellowButton w-full max-w-[650px]  ">
        <div className="justify-around space-x-4">
          <h2 className="ml-4">
            <b>Filtrar por:</b>
          </h2>
          <input
            checked={!isChecked}
            onChange={handleOnCheckbox}
            type="checkbox"
            name="perro"
            value="perro"
          ></input>
          <label htmlFor="perro">Perro</label>
          <input
            checked={!isChecked2}
            onChange={handleOnCheckbox2}
            type="checkbox"
            name="gato"
            value="gato"
          ></input>
          <label htmlFor="gato">Gato</label>
          <input
            checked={!isChecked3}
            onChange={handleOnCheckbox3}
            type="checkbox"
            name="Corrientes"
            value="Corrientes"
          ></input>
          <label htmlFor="Corrientes">Corrientes</label>
          <input
            checked={!isChecked4}
            onChange={handleOnCheckbox4}
            type="checkbox"
            name="Resistencia"
            value="Resistencia"
          ></input>
          <label htmlFor="Resistencia">Resistencia</label>
        </div>
      </div>


      {loading && <LoaderPosts />}
      <div className="flex  py-20  justify-center  ">
        <div className="mr-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:grid-cols-4">
          {datosFiltrados()}
        </div>
      </div>
    </>
  );
}