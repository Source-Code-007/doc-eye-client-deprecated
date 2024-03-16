const getSpecialties = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/admin/specialties`)
        const data = await res.json()
        return data
    } catch (e) {
        return e.message
    }
};

export default getSpecialties;