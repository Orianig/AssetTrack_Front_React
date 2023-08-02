import axios from 'axios';

const url = 'http://localhost:8000/api/user'


const config = (token) => {
    const headersConfig = {
        headers: { 
          "authorization": `Bearer ${token}`,  
        }
    };
    return headersConfig
}

//USER PROFILE
export const getUserProfile = async(token) => {
    const {data} = await axios.get(`${url}/profile`, config(token))
    return data
}

//USER UPDATE
export const updateProfile = async(token, credentials) => {
    const {data} = await axios.put(`${url}/profile/updateProfile`, credentials , config(token))
    return data
}

//USER PROJECTS
export const getMeProjects = async(token) => {
    const {data} = await axios.get(`${url}/projects`, config(token))
    return data
}