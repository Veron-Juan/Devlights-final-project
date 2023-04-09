import axios from "axios";

export const createPost = async (data) =>{
    return await axios.post(`http://localhost:4000/api/posts/upload`, data)
}

export const getPosts = async () => {
    return await axios.get("http://localhost:4000/api/posts")
}

export const getUserPosts = async (userId) => {
    return await axios.get("http://localhost:4000/api/posts2/userPosts/"+ userId)
}

export const registerUser = async (data) => {
    return await axios.post(`http://localhost:4000/api/auth/register`, data)
}

export const getPostById = async (p_postId) => {
    return await axios.get(`http://localhost:4000/api/posts2/${p_postId}`)
}

export const updatePost = async (postId, data) => {
    return await axios.put(`http://localhost:4000/api/posts2/${postId}`, data)
}

export const deletePost = async (postId) => {
    return await axios.delete(`http://localhost:4000/api/posts2/deletePost/${postId}` )
}