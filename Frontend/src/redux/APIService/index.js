import axios from 'axios';
export const baseURL = "http://localhost:3000/api/";
export const apiService = axios.create({
  baseURL: 'http://localhost:3000/api/',
});
let accessToken = localStorage.getItem("Sign")
  const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};

export const options = {
  headers: headers,
};

