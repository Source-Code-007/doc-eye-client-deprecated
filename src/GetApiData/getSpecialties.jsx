const getSpecialties = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/admin/specialties`, {
            next:{
                revalidate: 20
            }
        })
        const data = await res.json()
            return data?.data
    } catch (e) {
        return e
    }
};

export default getSpecialties;