import React from 'react';

const WalletCard = ({ icon: Icon, value, label, theme }) => {
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
            className="p-4 bg-white d-flex align-items-center h-100"
            style={cardStyle}
            onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyle)}
        >
            <div style={{ ...iconStyle, backgroundColor: theme.primaryLight }} className="me-4">
                <Icon size={32} variant="Bold" style={{ color: theme.primary }} />
            </div>
            <div className="text-start">
                <h3 className="h4 mb-0">{value}</h3>
                <p className="text-muted mb-0">{label}</p>
            </div>
        </div>
    );
};

export default WalletCard;