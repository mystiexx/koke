import http  from './httpService';
import { apiUrl } from '../config.json';
const apiEndpoint = `${apiUrl}/orders`;


export async function createOrder (data) {
    let response =  await http.post(`${apiEndpoint}`, data);
    return response;
  }
  