import axios from 'axios';

const url = 'http://localhost:8000/api/project'


const config = (token) => {
    const headersConfig = {
        headers: { 
          "authorization": `Bearer ${token}`,  
        }
    };
    return headersConfig
}

//all projects
export const getAllProjects = async(token) => {
    const {data} = await axios.get(`${url}/allProjects`, config(token))
    return data
}


