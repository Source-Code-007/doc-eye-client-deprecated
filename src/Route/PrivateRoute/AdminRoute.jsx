import MyLoading from '@/Components/HelpingCompo/MyLoading';
import { useAuth } from '@/Providers/AuthProvider';
import { useRouter } from 'next/navigation';

const AdminRoute = ({ children }) => {
    const router = useRouter()
    const { user, authLoading } = useAuth()
    const isAdmin = user?.role?.admin

    if (authLoading) {
        return <div className='h-screen flex items-center justify-center'><MyLoading /></div>
    }
    if (isAdmin) {
        return children
    }
    router.push('/signin', { state: { from: router.pathname } })
    return null
};

export default AdminRoute;