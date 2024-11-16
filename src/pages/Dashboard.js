import React from 'react';
import Sidenav from '../components/Sidenav';
import DashboardHeader from '../components/DashboardHeader';
import { Home, Wallet, MapPin, Star, RefreshCw, CreditCard } from 'lucide-react';

const Dashboard = () => {
    const recentPickups = [
        {
            location: '15 John Doe Estate',
            area: 'Lokogoma, Abuja',
            status: 'On the way',
            statusColor: 'warning',
            driverName: 'Driver Name',
            rating: 4.9,
            time: '24-10-2024, 3:30 PM'
        },
        {
            location: '15 John Doe Estate',
            area: 'Lokogoma, Abuja',
            status: 'Successful',
            statusColor: 'success',
            driverName: 'Driver Name',
            rating: 4.9,
            time: '24-10-2024, 3:30 PM'
        }
    ];

    return (
        <div className="d-flex vh-100" style={{ backgroundColor: '#f9fafb' }}>
            <Sidenav />
            <div className="flex-grow-1 d-flex flex-column">
                <DashboardHeader />
                <div className="flex-grow-1 p-4">

                    {/* Action Cards */}
                    <div className="row g-3">
                        <div className="col-6">
                            <div className="border rounded-3 p-3 text-center">
                                <CreditCard className="text-primary mb-2" />
                                <div className="small">Subscription Plan</div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="border rounded-3 p-3 text-center">
                                <RefreshCw className="text-success mb-2" />
                                <div className="small">Recycle Tokens</div>
                            </div>
                        </div>
                    </div>
                    {/* Welcome Section */}
                    <div className="bg-white rounded-3 p-4 mb-4 shadow-sm">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="h4 mb-0">Hello John Doe</h2>
                        </div>

                        {/* Token Balance */}
                        <div className="d-flex align-items-center gap-2 mb-4">
                            <div className="bg-success bg-opacity-10 p-2 rounded">
                                <Wallet className="text-success" />
                            </div>
                            <h3 className="h2 mb-0">6,730</h3>
                            <span className="ms-2">
                                <i className="bi bi-chevron-right text-muted"></i>
                            </span>
                        </div>

                        {/* Recent Pickups */}
                        <div className="mb-4">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="h6 mb-0">Recent Pickup</h4>
                                <a href="#!" className="text-success text-decoration-none small">View All</a>
                            </div>

                            {recentPickups.map((pickup, index) => (
                                <div key={index} className="border rounded-3 p-3 mb-3">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex gap-2">
                                            <MapPin className="text-success" />
                                            <div>
                                                <div className="fw-medium">{pickup.location}</div>
                                                <div className="text-muted small">{pickup.area}</div>
                                            </div>
                                        </div>
                                        <span className={`badge text-bg-${pickup.statusColor} bg-opacity-10 text-${pickup.statusColor}`}>
                                            {pickup.status}
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="bg-secondary bg-opacity-10 rounded-circle p-2">
                                                
                                            </div>
                                            <div>
                                                <div className="small">{pickup.driverName}</div>
                                                <div className="text-muted small">{pickup.time}</div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <span className="fw-medium">{pickup.rating}</span>
                                            <Star className="text-warning" size={16} fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;