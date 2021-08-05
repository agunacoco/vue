import axios from 'axios'
import { response } from 'express';

const instance = axios.create({

});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('acessToken')
        if (token)
            config.headers.Authorization = token
        else
            console.log('No token')
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error)
    }
);

export default instance;