import axios from "axios";

export const createPost = async (data) =>{
    return await axios.post(`http://localhost:4000/api/posts/upload`, data)
}

export const getPosts = async () => {
    return await axios.get("http://localhost:4000/api/posts")
}

export const registerUser = async (data) => {
    return await axios.post(`http://localhost:4000/api/auth/register`, data)
}

export const getLocations = async () => {
    return await axios.get("http://localhost:4000/api/posts2/locations")
}