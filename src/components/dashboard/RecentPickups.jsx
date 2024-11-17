import React from 'react';
import PickupCard from './PickupCard';

const RecentPickups = ({ pickups, theme }) => {
    const cardStyle = {
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'default',
        borderRadius: '16px',
        border: '1px solid #f6f7f8',
        boxShadow: '0 6px 24px rgba(0, 0, 0, 0.02)',
    };

    return (
        <div className="recent-pickups-section bg-white p-4 mx-2" style={cardStyle}>
            <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold mb-0">Recent Pickups</h5>
                    <a href="#!" style={{ color: theme.primary }} className="text-decoration-none fw-medium">View All</a>
                </div>

                {pickups.map((pickup, index) => (
                    <PickupCard key={index} pickup={pickup} theme={theme} />
                ))}
            </div>
        </div>
    );
};

export default RecentPickups;