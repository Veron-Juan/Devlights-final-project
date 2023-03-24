import {configureStore} from "@reduxjs/toolkit"
import  userSlice  from "./states/user"

export default configureStore({
    reducer:{
        user: userSlice
    }
})

