import React from 'react'
import {GoogleMap,useJsApiLoader,MarkerF} from '@react-google-maps/api'





function MapComponent(props) {
       
  const Marcadores = (props.Marcadores)
  const Center = props.post ? props.Marcadores : props.Center      
  console.log(Center) 
    
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  return isLoaded ? (
    
      <GoogleMap
        mapContainerClassName='map'
        mapContainerStyle={mapContainerStyle}
        center={Center}
        zoom={12}
      >
      {Marcadores.map(({ id,position }) => (
        <MarkerF
          key={id}
          position={position}
          /> ))}
      </GoogleMap>
    
  ) : ( <div>cargando</div>)
}

export default MapComponent;

