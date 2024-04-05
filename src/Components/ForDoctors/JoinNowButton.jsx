'use client'
import { useAuth } from '@/Providers/AuthProvider';
import { useRouter } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const JoinNowButton = () => {
    const { user, authLoading } = useAuth()
    const router = useRouter()


    const handleJoinNow = () => {

        if (!user) {
            Swal.fire({
                title: "Please signin first!",
                text: "You have to signin first to register as a doctor!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Signin"
            }).then((result) => {

                if (result.isConfirmed) {
                    router.push('/signin');
                }
            });
        } else {
            router.push('/registration-doctor')
        }
    }


    return (
        <button className={`w-fit ${authLoading ? 'my-disable-btn-two' : 'my-btn-two'}`} disabled={authLoading}
            onClick={() => handleJoinNow()}>Join now {authLoading && <span className="loading loading-spinner"></span>}</button>
    );
};

export default JoinNowButton;