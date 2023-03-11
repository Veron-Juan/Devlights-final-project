import {configureStore} from "@reduxjs/toolkit"
import  userSlice  from "./states.js/user"

export default configureStore({
    reducer:{
        user: userSlice
    }
})

