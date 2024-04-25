import React, { useEffect, useState } from 'react';
import useAxiosInstance from '../Axios/useAxiosInstance';

const useSpecialtiesData = () => {
    const [medicalSpecialtiesLoading, setMedicalSpecialtiesLoading] = useState(false)
    const [medicalSpecialties, setMedicalSpecialties] = useState([])
    const axiosInstance = useAxiosInstance()

    useEffect(() => {
        setMedicalSpecialtiesLoading(true)
        axiosInstance('/admin/specialties').then(res => {
            setMedicalSpecialtiesLoading(false)
            setMedicalSpecialties(res.data?.data)
        }).catch(e => {
            setMedicalSpecialtiesLoading(false)
            console.log(e);
        })
    }, [])


    return { medicalSpecialties, medicalSpecialtiesLoading }
};

export default useSpecialtiesData;