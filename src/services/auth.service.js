import axios from 'axios';

const url = 'http://localhost:8000/'

//REGISTRO
export const register = async (credentials) => {
    const {data} = await axios.post(`${url}auth/register`,credentials)
    return data
}

//LOGIN
//funcion que toma las credenciales del usuario
export const login = async (credentials) => {
      const res = await axios.post(`${url}auth/login`, credentials);
      // console.log('Respuesta de inicio de sesión:', res.data);
      return res.data.token;
  };