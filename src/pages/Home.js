import React from 'react';
import DashboardCards from '../components/dashboard/DashboardCards';
import RecentPickups from '../components/dashboard/RecentPickups';
import { recentPickups } from '../data/dashboardData';

export default function Home() {
    const theme = {
        primary: '#51b42b',
        primaryLight: 'rgba(81, 180, 43, 0.05)',
    };
    return (
        <div className="py-3">
            <DashboardCards theme={theme} />

            <div className="my-4"></div>

            <RecentPickups pickups={recentPickups} theme={theme} />
        </div>
    );
}