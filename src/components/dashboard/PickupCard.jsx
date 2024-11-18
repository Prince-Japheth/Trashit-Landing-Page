import React from 'react';
import { LocationTick, Star1 } from 'iconsax-react';
import DefaultProfilePicture from '../../assets/default-profile.jpg';

const PickupCard = ({ pickup, theme }) => {
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
        <div
            className="pickup-card p-3 p-md-4 mb-3"
            style={{
                borderRadius: '12px',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                border: '1px solid #f6f7f8'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateX(8px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
        >
            <div className="d-flex flex-md-row justify-content-between align-items-start mb-3">
                <div className="d-flex gap-3 mb-2 mb-md-0">
                    <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: theme.primaryLight, padding: '10px 10px', borderRadius: '10px', }}>
                        <LocationTick size={20} variant="Linear" style={{ color: theme.primary }} />
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
            <div className="d-flex flex-md-row justify-content-between align-items-start align-items-md-center">
                <div className="d-flex align-items-center gap-3 mb-2 mb-md-0">
                    <div className="bg-white rounded-circle">
                        <img src={DefaultProfilePicture} alt="driver" className="rounded-circle" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <div className="fw-medium">{pickup.driverName}</div>
                        <div className="text-muted small">{pickup.time}</div>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <span className="fw-semibold">{pickup.rating}</span>
                    <Star1 size={18} variant="Bold" style={{ color: 'gold' }} />
                </div>
            </div>
        </div>
    );
};

export default PickupCard;