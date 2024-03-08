import MyLoading from '@/Components/HelpingCompo/MyLoading';
import { useAuth } from '@/Providers/AuthProvider';
import { useRouter } from 'next/navigation';

const DoctorRoute = ({children}) => {
    const router = useRouter()
    const { user, authLoading } = useAuth()
    const isDoctor = user?.role?.doctor

    if (authLoading) {
        return <div className='h-screen flex items-center justify-center'><MyLoading /></div>
    }
    if (isDoctor) {
        return children
    }
    router.push('/signin', { state: { from: router.pathname } })
    return null
};

export default DoctorRoute;