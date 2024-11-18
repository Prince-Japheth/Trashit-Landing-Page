import React from 'react';
import PickupCard from './PickupCard';

const RecentPickups = ({ pickups, theme }) => {

    return (
        <div className="recent-pickups-section p-md-4 p-0 mx-2">
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