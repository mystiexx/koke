import http  from './httpService';
import { apiUrl } from '../config.json';
const apiEndpoint = `${apiUrl}/users`;

export async function addMember (data) {
  let response =  await http.post(`${apiEndpoint}`, data);
  return response;
}

