import React from 'react'
import {GoogleMap,useJsApiLoader,MarkerF} from '@react-google-maps/api'





function MapComponent(props) {
       
  const Marcadores = (props.Marcadores)
  const Center =  (props.Center)      
    
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  }

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "",
  });

  const onMarkerDragEnd = (coord) => {
    const { latLng } = coord;
    props.setCenter({ lat: latLng.lat(), lng: latLng.lng()})

  };

  return isLoaded ? (
    
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={Center}
        zoom={props.zoom}
        options={{ disableDefaultUI: true, zoomControl: true, draggable: false }}
      >
      {Marcadores.map(({ id,position }) => (
        <MarkerF
          draggable={props.selecionMarcador}
          key={id}
          position={position}
          onDragEnd={(coord) => onMarkerDragEnd(coord)}
          /> ))}
      </GoogleMap>
    
  ) : ( <div>cargando</div>)
}

export default MapComponent;

