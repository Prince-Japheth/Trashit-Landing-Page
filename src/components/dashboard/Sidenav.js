import React from 'react';
import { Home2, User, Trash, Box, Wallet, CloseCircle } from 'iconsax-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

const Sidenav = ({ onClose, isMobile = false }) => {
  const location = useLocation();
  
  const navItems = [
    { id: 'Dashboard', icon: Home2, label: 'Dashboard', path: '/dashboard' },
    { id: 'FundWallet', icon: Wallet, label: 'Fund Wallet', path: '/dashboard/fund-wallet' },
    { id: 'RequestPickup', icon: Trash, label: 'Request Pickup', path: '/dashboard/request-pickup' },
    { id: 'RecycleTokens', icon: Box, label: 'Recycle Tokens', path: '/dashboard/recycle-tokens' },
    { id: 'SubscriptionPlan', icon: Wallet, label: 'Subscription Plan', path: '/dashboard/subscription-plan' },
    { id: 'User', icon: User, label: 'Profile', path: '/dashboard/profile' },
    // { id: 'Settings', icon: Setting2, label: 'Settings', path: '/dashboard/settings' },
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
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <li key={item.id} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link d-flex align-items-center gap-2 ${isActive ? 'active' : 'text-dark'}`}
                style={{
                  backgroundColor: isActive ? '#afffbe' : 'transparent',
                  color: isActive ? '#52b42b' : 'inherit',
                  borderRadius: '10px',
                  padding: '15px 10px',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => {
                  if (isMobile) onClose?.();
                }}
              >
                <Icon 
                  size="20" 
                  variant={isActive ? 'Bold' : 'Linear'} 
                />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidenav;