import axios from "axios";

export const createPost = async (data) =>{
    return await axios.post(`http://localhost:4000/api/posts/upload`, data)
}