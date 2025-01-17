import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logout} = useAuth();
    // request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log("Stopped by interceptors", token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function(error){
        // Do something with request error
        return Promise.reject(error);
    });
    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error) => {
        const status = error.response.status
        console.log('status error in the interceptors', status);
        // for 401 and 403 logout the user and navigate to login page
        if(status === 401 || status === 403){
            await logout();
            navigate('/login')
        }
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;