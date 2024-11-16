import React from 'react';
import { Bell, Search, Settings } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg py-2 px-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3 ms-auto">
          <button className="btn btn-link text-dark p-1">
            <Search className="w-5 h-5" />
          </button>
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
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;