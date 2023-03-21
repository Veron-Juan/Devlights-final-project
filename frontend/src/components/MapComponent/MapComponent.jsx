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
    googleMapsApiKey: "AIzaSyA1ofebywFeNyw5epc6EhtUOWUrJ0I41iw",
  });

  const onMarkerDragEnd = (coord) => {
    const { latLng } = coord;
    props.setMark({id:1, position:{ lat: latLng.lat(), lng: latLng.lng() }});
  };

  return isLoaded ? (
    
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={Center}
        zoom={12}
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

