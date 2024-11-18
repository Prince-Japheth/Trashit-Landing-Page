import React from 'react';
import { HambergerMenu, Notification } from 'iconsax-react';
import DefaultProfilePicture from '../../assets/default-profile.jpg';

const DashboardHeader = ({ onToggleSidebar }) => {
  const theme = {
    iconSize: 24,
    iconVariant: 'Linear'
  };

  return (
    <nav className="navbar navbar-expand-lg py-2 px-md-3 pt-4" 
      style={{ 
        backdropFilter: 'blur(10px)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000,
      }}>
      <div className="container-fluid">
        {/* Only show menu button on mobile */}
        <button 
          className="btn btn-link text-dark p-1 d-lg-none d-flex align-items-center" 
          onClick={onToggleSidebar}
        >
          <HambergerMenu
            size={theme.iconSize}
            variant={theme.iconVariant}
          />
        </button>
        
        <div className="d-flex align-items-center gap-3 ms-auto">
          <button className="btn btn-link text-dark p-1 position-relative">
            <Notification
              size={theme.iconSize}
              variant={theme.iconVariant}
            />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
          </button>
          {/* <button className="btn btn-link text-dark p-1 position-relative">
            <Setting2
              size={theme.iconSize}
              variant={theme.iconVariant}
            />
          </button> */}
          <img
            src={DefaultProfilePicture}
            alt="Profile"
            className="rounded-circle"
            style={{ width: '32px', height: '32px', objectFit: 'cover' }}
          />
          <p className="d-none d-md-block mb-0 fs-5">John Doe</p>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;