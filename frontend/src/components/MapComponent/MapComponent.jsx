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
    props.setCenter({ lat: latLng.lat(), lng: latLng.lng()})

  };

  return isLoaded ? (
    
      <GoogleMap
        resetBoundsOnResize={true}
        mapContainerStyle={mapContainerStyle}
        center={Center}
        zoom={props.zoom}
        options={{ disableDefaultUI: true, zoomControl: true }}
      >
      {Marcadores.map(({ id,position }) => (
        <MarkerF
          draggable={props.selecionMarcador}
          key={id}
          position={position}
          onDragEnd={(coord) => onMarkerDragEnd(coord)}
          /> ))}
      </GoogleMap>
    
  ) : ( <div className="text-black text-lg">HOLAAAAA</div>)
}

export default MapComponent;

