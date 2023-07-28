import axios from 'axios';

const url = 'http://localhost:8000/api/auth'

//REGISTRO
export const register = async (credentials) => {
    const {data} = await axios.post(`${url}/register`, credentials)
    return data
}

//LOGIN
export const login = async (credentials) => {
    const {data} = await axios.post(`${url}/login`, credentials);
      return data;
  };