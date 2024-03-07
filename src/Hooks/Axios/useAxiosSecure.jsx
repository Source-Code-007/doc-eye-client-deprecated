import axios from 'axios';
import useCookies from '../useCookies';
import { useEffect } from 'react';


const axiosSecure = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API}`
})


const useAxiosSecure = () => {
    const cookies = useCookies()
    const docEyeAccessToken = cookies.get('docEyeAccessToken')


        // Add a request interceptor
        axiosSecure.interceptors.request.use(function (config) {
            // Do something before request is sent
            config.headers.Authorization = `Bearer ${docEyeAccessToken}`
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        axiosSecure.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        });

    return axiosSecure
};

export default useAxiosSecure;