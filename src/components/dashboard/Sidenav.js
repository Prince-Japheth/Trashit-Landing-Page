import React, { useState } from 'react';
import { Home2, User, Bag2, Box, Setting2, Wallet, CloseCircle } from 'iconsax-react';

const Sidenav = ({ onClose, isMobile = false }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { id: 'Dashboard', icon: <Home2 size="20" variant={activeItem === 'Dashboard' ? 'Bold' : 'Linear'} />, label: 'Dashboard' },
    { id: 'FundWallet', icon: <Wallet size="20" variant={activeItem === 'FundWallet' ? 'Bold' : 'Linear'} />, label: 'Fund Wallet' },
    { id: 'RequestPickup', icon: <Bag2 size="20" variant={activeItem === 'RequestPickup' ? 'Bold' : 'Linear'} />, label: 'Request Pickup' },
    { id: 'RecycleTokens', icon: <Box size="20" variant={activeItem === 'RecycleTokens' ? 'Bold' : 'Linear'} />, label: 'Recycle Tokens' },
    { id: 'SubscriptionPlan', icon: <Wallet size="20" variant={activeItem === 'SubscriptionPlan' ? 'Bold' : 'Linear'} />, label: 'Subscription Plan' },
    { id: 'User', icon: <User size="20" variant={activeItem === 'User' ? 'Bold' : 'Linear'} />, label: 'User' },
    { id: 'Settings', icon: <Setting2 size="20" variant={activeItem === 'Settings' ? 'Bold' : 'Linear'} />, label: 'Settings' },
  ];

  const sidenavStyles = isMobile ? {
    width: '300px',
    borderRight: '1px solid #f6f7f8',
    zIndex: 2000,
  } : {
    width: '300px',
    height: '100vh',
    borderRight: '1px solid #f6f7f8',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 2000,
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white h-100"
      style={sidenavStyles}
    >
      <div className="d-flex justify-content-between align-items-center">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
          <img src="./components/logo.svg" alt="Logo" className="me-2" style={{ width: '32px', height: '32px' }} />
        </a>
        {isMobile && (
          <button 
            className="btn btn-link text-dark p-1" 
            onClick={onClose}
          >
            <CloseCircle size="24" />
          </button>
        )}
      </div>
      <br />
      <br />
      <ul className="nav nav-pills flex-column gap-3 mb-auto">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <a
              href="#!"
              className={`nav-link d-flex align-items-center gap-2 ${
                activeItem === item.id ? 'active' : 'text-dark'
              }`}
              style={{
                backgroundColor: activeItem === item.id ? '#afffbe' : 'transparent',
                color: activeItem === item.id ? '#52b42b' : 'inherit',
                borderRadius: '10px',
                padding: '15px 10px',
                transition: 'all 0.3s ease',
              }}
              onClick={() => {
                setActiveItem(item.id);
                if (isMobile) onClose?.();
              }}
            >
              {item.icon}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidenav;
