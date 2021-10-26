import axios from 'axios';

const api = axios.create({
    baseURL: "https://encurtador-de-url-backend.herokuapp.com/",
});

export default api;