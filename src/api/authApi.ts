import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loginUser = async (credentials: { email: string; password: string }) => {
    const response = await axios.post(`${API_BASE_URL}auth/login`, credentials);
    return response.data;
};

export const registerUser = async (userData: { name: string; role: string; email: string; password: string }) => {
    const response = await axios.post(`${API_BASE_URL}user/register`, userData);
    return response.data;
};

export const logoutUser = async (userData: { name: string; role: string; email: string; password: string }) => {
    const response = await axios.post(`${API_BASE_URL}user/register`, userData);
    return response.data;
};
