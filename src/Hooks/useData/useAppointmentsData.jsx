import { useEffect, useState } from 'react';
import useAxiosSecure from '../Axios/useAxiosSecure';

const useExpectedDoctorAppointmentsData = (id) => {
    const [expectedDoctorAppointmentsLoading, setExpectedDoctorAppointmentsLoading] = useState(false)
    const [expectedDoctorAppointments, setExpectedDoctorAppointments] = useState([])
    const axiosSecure = useAxiosSecure(id)

    useEffect(() => {
        setExpectedDoctorAppointmentsLoading(true)
        axiosSecure(`/doctor/get-doctor-appointments/${id}`).then(res => {
            setExpectedDoctorAppointmentsLoading(false)
            setExpectedDoctorAppointments(res.data?.data)
        }).catch(e => {
            setExpectedDoctorAppointmentsLoading(false)
            console.log(e);
        })
    }, [axiosSecure, id])


    return { expectedDoctorAppointments, expectedDoctorAppointmentsLoading }
};

export default useExpectedDoctorAppointmentsData;