import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9000/api",
  withCredentials: true,
});

API.defaults.headers.common["Authorization"] = localStorage.getItem("auth");

export default API;
