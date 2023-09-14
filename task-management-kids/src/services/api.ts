import axios from 'axios';

export const api = axios.create({
  baseURL: "https://34.207.250.252"
  // baseURL: "http://localhost:8080"
});

api.get("/users/:id");