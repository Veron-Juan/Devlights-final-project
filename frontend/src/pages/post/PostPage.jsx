import React from 'react'
import {PostForm} from "../../components/Post/PostForm"
import MapComponent from '../../components/MapComponent/MapComponent'


export default function Post() {
  //get position with geolocation 

  const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  return (
    <div>
      <div className='min-h-full max-w-ful flex  justify-center'>
        <PostForm/>
        <MapComponent/>
      </div>

    </div>
  )
}