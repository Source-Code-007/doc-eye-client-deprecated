import axios from 'axios';

const useAxiosInstance = () => {
    const axiosInstance = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API}`
    })
    return axiosInstance
};

export default useAxiosInstance;