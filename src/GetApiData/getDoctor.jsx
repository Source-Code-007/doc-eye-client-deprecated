const getDoctor = async(slug)=> {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/doctor/expected-doctor/${slug}`, {
            next: {
                revalidate: 20
            }
        })
        const data = await res.json()
        return data.data
    }catch(e){
        console.log(e);
        return e
    }
}

export default getDoctor