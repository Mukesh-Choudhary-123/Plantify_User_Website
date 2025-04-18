import axios from 'axios';

const IP = "192.168.43.74";
const API_BASE_URL = `http://${IP}:8000/api/v1`;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
export { API_BASE_URL };
