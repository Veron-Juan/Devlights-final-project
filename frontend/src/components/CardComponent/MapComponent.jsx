import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './MapComponent.css'

  //Hacer un retrieve de la key desde un .env en el frontend es una mala practica, lo ideal es pedirla al backend. Cambiar en un futuro

//Componente que se muestra en el mapa  en forma de pines
const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

//Componente que muestra el mapa
function Map({ location, zoomLevel }) {
  
  return (
    <div className="map">
      <div className="rounded-md google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key:''}}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          className="rounded-md"
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address} />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map