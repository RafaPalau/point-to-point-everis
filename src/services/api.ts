import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://salty-chamber-80814.herokuapp.com/http://api-cities-dio.herokuapp.com',
})