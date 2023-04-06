import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    location: "",
    latitude: "",
    longitude: "",
}

export const persistLocalStorageLocation = (locationInfo) => {
    localStorage.setItem("location", JSON.stringify({...locationInfo}));
  };

export const clearLocalStorageLocation = () => {
    localStorage.removeItem("location");
  };
  
export const locationSlice = createSlice({
    name: "location",
    initialState: localStorage.getItem("location")
    ? JSON.parse(localStorage.getItem("location"))
    : initialState,
    reducers:{
        addLocation: (state, action) => {
            persistLocalStorageLocation(action.payload);
            return action.payload;
        },
        //cambiar ubic 
        resetLocation: () => {
            clearLocalStorageLocation();
            return EmptyLocationState;
          }
    },
})

export const { addLocation, resetLocation } = locationSlice.actions;

export default locationSlice.reducer;