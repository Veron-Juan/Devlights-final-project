import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";



export const AuthGuard = () =>{
    const userState = useSelector((store)=> store.user);
    return userState.token ? <Outlet /> : <Navigate replace to="login" />
}