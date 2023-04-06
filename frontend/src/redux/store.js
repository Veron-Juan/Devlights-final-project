import {configureStore} from "@reduxjs/toolkit"
import  userSlice  from "./states.js/user"
import locationSlice from "./states.js/location"

export default configureStore({
    reducer:{
        user: userSlice,
        location: locationSlice
    }
})

