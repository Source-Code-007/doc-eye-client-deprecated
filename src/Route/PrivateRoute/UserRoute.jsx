import MyLoading from '@/Components/HelpingCompo/MyLoading';
import { useAuth } from '@/Providers/AuthProvider';
import { useRouter } from 'next/navigation';

const UserRoute = ({children}) => {
    const router = useRouter()
    const { user, authLoading } = useAuth()
    const isUser = user?.role?.user

    if (authLoading) {
        return <div className='h-screen flex items-center justify-center'><MyLoading /></div>
    }
    if (isUser) {
        return children
    }
    router.push('/signin', { state: { from: router.pathname } })
    return null
};

export default UserRoute;