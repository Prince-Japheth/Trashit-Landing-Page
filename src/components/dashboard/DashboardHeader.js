import React from 'react';
import { Bell, Settings, Menu } from 'lucide-react';

const DashboardHeader = ({ onToggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg py-2 px-3 pt-4" 
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
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="d-flex align-items-center gap-3 ms-auto">
          <button className="btn btn-link text-dark p-1 position-relative">
            <Bell className="w-5 h-5" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
          </button>
          <button className="btn btn-link text-dark p-1 position-relative">
            <Settings className="w-5 h-5" />
          </button>
          <img
            src="/path-to-profile-image.png"
            alt="Profile"
            className="rounded-circle"
            style={{ width: '32px', height: '32px' }}
          />
          <h5 className="d-none d-md-block mb-0">Hello John Doe</h5>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;