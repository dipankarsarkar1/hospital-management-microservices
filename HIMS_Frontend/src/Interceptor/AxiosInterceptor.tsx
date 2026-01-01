import axios, { InternalAxiosRequestConfig } from 'axios';

const axiosInterceptor = axios.create({
    baseURL: 'http://localhost:9000',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInterceptor.interceptors.request.use(
    (config:InternalAxiosRequestConfig) => {
        return config;
    });

export default axiosInterceptor;