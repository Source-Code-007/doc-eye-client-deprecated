import DashboardLayout from '@/Components/HelpingCompo/DashboardLayout';
import React from 'react';

const layout = ({ children }) => {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    );
};

export default layout;