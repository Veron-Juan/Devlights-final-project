import {configureStore} from "@reduxjs/toolkit"
import  userSlice  from "./states/user"
import locationSlice from "./states/location"

export default configureStore({
    reducer:{
        user: userSlice,
        location: locationSlice
    }
})

