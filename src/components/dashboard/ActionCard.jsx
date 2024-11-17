import React from 'react';

const ActionCard = ({ icon: Icon, label, theme }) => {
    const cardStyle = {
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        borderRadius: '16px',
        border: '1px solid #f6f7f8',
        boxShadow: '0 6px 24px rgba(0, 0, 0, 0.02)',
    };

    const hoverStyle = {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)'
    };

    const iconStyle = {
        width: 'fit-content',
        padding: '12px',
        borderRadius: '50%'
    };

    return (
        <div
            className="p-4 text-center bg-white h-100"
            style={cardStyle}
            onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyle)}
        >
            <div style={{ ...iconStyle, backgroundColor: theme.primaryLight }} className="mb-3 mx-auto">
                <Icon size={24} variant="Bold" style={{ color: theme.primary }} />
            </div>
            <div className="fw-medium">{label}</div>
        </div>
    );
};

export default ActionCard;