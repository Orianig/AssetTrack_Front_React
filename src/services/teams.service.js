import axios from 'axios';

const url = 'http://localhost:8000/api/team'


const config = (token) => {
    const headersConfig = {
        headers: { 
          "authorization": `Bearer ${token}`,  
        }
    };
    return headersConfig
}

//ALL TEAMS
export const getAllTeams = async(token) => {
    const {data} = await axios.get(`${url}/allTeams`, config(token))
    return data
}
