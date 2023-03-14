import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    lastname:"",
    email:"",
    password:"",
}

export const persistLocalStorageUser = (userInfo) => {
    localStorage.setItem("user", JSON.stringify({ ...userInfo }));
  };
  
  export const clearLocalStorageUser = () => {
    localStorage.removeItem("user");
  };

export const userSlice = createSlice({
    name: "user",
    initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : initialState,
    reducers:{
        addUser: (state, action) => {
            persistLocalStorageUser(action.payload);
            return action.payload;
        },
        //cerrar sesion
        resetUser: () => {
            clearLocalStorageUser();
            return EmptyUserState;
          },
    }
})

export const { addUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
