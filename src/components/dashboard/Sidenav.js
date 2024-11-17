import React, { useState } from 'react';
import { Home2, User, Bag2, Box, Setting2, Wallet, CloseCircle } from 'iconsax-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../assets/logo/logo.png';

const Sidenav = ({ onClose, isMobile = false }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { id: 'Dashboard', icon: <Home2 size="20" variant={activeItem === 'Dashboard' ? 'Bold' : 'Linear'} />, label: 'Dashboard', path: '/dashboard' },
    { id: 'FundWallet', icon: <Wallet size="20" variant={activeItem === 'FundWallet' ? 'Bold' : 'Linear'} />, label: 'Fund Wallet', path: '/dashboard/fund-wallet' },
    { id: 'RequestPickup', icon: <Bag2 size="20" variant={activeItem === 'RequestPickup' ? 'Bold' : 'Linear'} />, label: 'Request Pickup', path: '/dashboard/request-pickup' },
    { id: 'RecycleTokens', icon: <Box size="20" variant={activeItem === 'RecycleTokens' ? 'Bold' : 'Linear'} />, label: 'Recycle Tokens', path: '/dashboard/recycle-tokens' },
    { id: 'SubscriptionPlan', icon: <Wallet size="20" variant={activeItem === 'SubscriptionPlan' ? 'Bold' : 'Linear'} />, label: 'Subscription Plan', path: '/dashboard/subscription-plan' },
    { id: 'User', icon: <User size="20" variant={activeItem === 'User' ? 'Bold' : 'Linear'} />, label: 'User', path: '/dashboard/user' },
    { id: 'Settings', icon: <Setting2 size="20" variant={activeItem === 'Settings' ? 'Bold' : 'Linear'} />, label: 'Settings', path: '/dashboard/settings' },
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
      <div className="d-flex justify-content-center align-items-center">
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-auto me-md-auto text-decoration-none">
          <img src={logo} alt="Logo" className="me-2 mt-4" style={{ width: '150px' }} />
        </Link>
        {isMobile && (
          <button
            className="btn btn-link text-dark p-1 mt-4"
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
            <Link
              to={item.path}
              className={`nav-link d-flex align-items-center gap-2 ${activeItem === item.id ? 'active' : 'text-dark'
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidenav;
