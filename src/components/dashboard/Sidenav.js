import React, { useState } from 'react';
import { Home2, User, Bag2, Box, Setting2, Wallet } from 'iconsax-react';

const Sidenav = () => {
  const [activeItem, setActiveItem] = useState('Dashboard'); // Tracks active button

  const navItems = [
    { id: 'Dashboard', icon: <Home2 size="20" variant={activeItem === 'Dashboard' ? 'Bold' : 'Linear'} />, label: 'Dashboard' },
    { id: 'FundWallet', icon: <Wallet size="20" variant={activeItem === 'FundWallet' ? 'Bold' : 'Linear'} />, label: 'Fund Wallet' },
    { id: 'RequestPickup', icon: <Bag2 size="20" variant={activeItem === 'RequestPickup' ? 'Bold' : 'Linear'} />, label: 'Request Pickup' },
    { id: 'RecycleTokens', icon: <Box size="20" variant={activeItem === 'RecycleTokens' ? 'Bold' : 'Linear'} />, label: 'Recycle Tokens' },
    { id: 'SubscriptionPlan', icon: <Wallet size="20" variant={activeItem === 'SubscriptionPlan' ? 'Bold' : 'Linear'} />, label: 'Subscription Plan' },
    { id: 'User', icon: <User size="20" variant={activeItem === 'User' ? 'Bold' : 'Linear'} />, label: 'User' },
    { id: 'Settings', icon: <Setting2 size="20" variant={activeItem === 'Settings' ? 'Bold' : 'Linear'} />, label: 'Settings' },
  ];

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white"
      style={{
        width: '300px',
        height: '100vh',
        borderRight: '1px solid #f6f7f8',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
        <img src="./components/logo.svg" alt="Logo" className="me-2" style={{ width: '32px', height: '32px' }} />
      </a>
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
                transition: 'all 0.3s ease', // Animation for hover/active
              }}
              onClick={() => setActiveItem(item.id)}
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
