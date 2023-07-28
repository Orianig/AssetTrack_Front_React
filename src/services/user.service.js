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
    const {data} = await axios.put(`${url}/updateProfile`, credentials , config(token))
    return data
}