import axios from 'axios';

export const api = axios.create({
  // baseURL: "https://34.228.223.216:8080"
  baseURL: "https://localhost:8443"

});

// api.get("/users/:id");
