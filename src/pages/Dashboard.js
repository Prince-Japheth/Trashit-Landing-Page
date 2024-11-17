// C:\Users\USER\Desktop\trashit-web\src\pages\Dashboard.js
import React from 'react';
import Sidenav from '../components/dashboard/Sidenav';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import { Wallet2, LocationTick, Star1, RotateLeft, Card } from 'iconsax-react';

export default function Component() {
    // Theme colors
    const theme = {
        primary: '#51b42b',
        primaryLight: 'rgba(81, 180, 43, 0.05)', // Light version for backgrounds
    };

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

    const cardStyle = {
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        borderRadius: '16px',
        border: '1px solid #f6f7f8',  // Border for all cards
        boxShadow: '0 6px 24px rgba(0, 0, 0, 0.02)',  // Lighter shadow with more spread
    };

    const hoverStyle = {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)'  // Slightly stronger hover shadow
    };

    const iconStyle = {
        width: 'fit-content',
        padding: '12px',
        borderRadius: '50%'
    };

    // Status badge styles
    const getStatusStyle = (color) => {
        const colors = {
            warning: {
                bg: '#FFF7E6',
                text: '#D46B08'
            },
            success: {
                bg: 'rgba(81, 180, 43, 0.1)',
                text: theme.primary
            }
        };
        return colors[color] || colors.warning;
    };

    return (
        <div className="d-flex vh-100 row" style={{ backgroundColor: '#f8fafc' }}>

            <div className="d-none d-lg-block col-2">
                <Sidenav />
            </div>

            <div className="col-8 ps-0 ps-md-5 ms-0 ms-md-5 me-0 me-md-4 flex-grow-1 d-flex flex-column containerr" style={{ marginLeft: 0, paddingLeft: 0, paddingBottom: '80px' }}>
                <DashboardHeader />
                <div className="flex-grow-1 p-4">
                    {/* Action Cards */}
                    <div className="row g-4">
                        <div className="col-12 col-md-6">
                            <div
                                className="p-4 bg-white d-flex align-items-center h-100"
                                style={cardStyle}
                                onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)}
                                onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyle)}
                            >
                                <div style={{ ...iconStyle, backgroundColor: theme.primaryLight }} className="me-4">
                                    <Wallet2 size={32} variant="Bold" style={{ color: theme.primary }} />
                                </div>
                                <div className="text-start">
                                    <h3 className="h4 mb-0">6,730</h3>
                                    <p className="text-muted mb-0">Total Balance</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div
                                className="p-4 text-center bg-white h-100"
                                style={cardStyle}
                                onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)}
                                onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyle)}
                            >
                                <div style={{ ...iconStyle, backgroundColor: theme.primaryLight }} className="mb-3 mx-auto">
                                    <Card size={24} variant="Bold" style={{ color: theme.primary }} />
                                </div>
                                <div className="fw-medium">Subscription Plan</div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div
                                className="p-4 text-center bg-white h-100"
                                style={cardStyle}
                                onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)}
                                onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyle)}
                            >
                                <div style={{ ...iconStyle, backgroundColor: theme.primaryLight }} className="mb-3 mx-auto">
                                    <RotateLeft size={24} variant="Bold" style={{ color: theme.primary }} />
                                </div>
                                <div className="fw-medium">Recycle Tokens</div>
                            </div>
                        </div>
                    </div>

                    <div className="my-4"></div>

                    {/* Recent Pickups Section */}
                    <div className="bg-white p-4 mb-4" style={{ ...cardStyle, cursor: 'default' }}>
                        <div className="mb-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h5 className="fw-bold mb-0">Recent Pickups</h5>
                                <a href="#!" style={{ color: theme.primary }} className="text-decoration-none fw-medium">View All</a>
                            </div>

                            {recentPickups.map((pickup, index) => (
                                <div
                                    key={index}
                                    className="p-4 mb-3 bg-light border-0"
                                    style={{
                                        borderRadius: '12px',
                                        transition: 'transform 0.2s',
                                        cursor: 'pointer',
                                        border: '1px solid #f6f7f8'  // Border added to the pickup cards
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'translateX(8px)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
                                >
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div className="d-flex gap-3">
                                            <div className="bg-white p-2 rounded-3">
                                                <LocationTick size={20} variant="Bold" style={{ color: theme.primary }} />
                                            </div>
                                            <div>
                                                <div className="fw-semibold mb-1">{pickup.location}</div>
                                                <div className="text-muted small">{pickup.area}</div>
                                            </div>
                                        </div>
                                        <span
                                            className="badge px-3 py-2"
                                            style={{
                                                borderRadius: '8px',
                                                backgroundColor: getStatusStyle(pickup.statusColor).bg,
                                                color: getStatusStyle(pickup.statusColor).text,
                                                fontWeight: '500'
                                            }}
                                        >
                                            {pickup.status}
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="bg-white rounded-circle p-2">
                                                <img src="/api/placeholder/32/32" alt="driver" className="rounded-circle" />
                                            </div>
                                            <div>
                                                <div className="fw-medium">{pickup.driverName}</div>
                                                <div className="text-muted small">{pickup.time}</div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="fw-semibold">{pickup.rating}</span>
                                            <Star1 size={18} variant="Bold" style={{ color: theme.primary }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Bottom Navigation - Show on mobile, hide on desktop */}
            <div className="d-lg-none">
                <Sidenav isMobile={true} />
            </div>
        </div>
    );
}

