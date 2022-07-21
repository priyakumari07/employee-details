import axios from "axios";

const ApiService = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

export default ApiService;
  