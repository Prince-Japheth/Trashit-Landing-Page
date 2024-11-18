import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../index.css';
import Sidenav from '../components/dashboard/Sidenav';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import Home from './Home';
import FundWallet from './FundWallet';
import RequestPickup from './RequestPickup';
import SubscriptionPlan from './SubscriptionPlan';

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="min-vh-100 w-100" style={{ backgroundColor: '#f8fafc' }}>
      {/* Mobile Sidebar */}
      <div
        className={`position-fixed top-0 start-0 h-100 w-100 bg-dark d-lg-none ${isSidebarOpen ? 'd-block' : 'd-none'}`}
        style={{ opacity: '0.5', zIndex: 1040 }}
        onClick={() => setSidebarOpen(false)}
      />
      <div
        className="position-fixed h-100 d-lg-none"
        style={{
          width: '300px',
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 1050,
        }}
      >
        <Sidenav onClose={() => setSidebarOpen(false)} isMobile={true} />
      </div>
      <div className="d-flex">
        {/* Desktop Sidebar */}
        <div className="d-none d-lg-block" style={{ width: '280px', flexShrink: 0 }}>
          <Sidenav />
        </div>
        {/* Main Content */}
        <div className="flex-grow-1">
          <DashboardHeader
            onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
            isMobile={window.innerWidth < 992}
          />
          {/* Dashboard Routes */}
          <div className=" px-1 px-md-4 ">
            <Routes>
              <Route index element={<Home />} />
              <Route path="fund-wallet" element={<FundWallet />} />
              <Route path="request-pickup" element={<RequestPickup />} />
              <Route path="subscription-plan" element={<SubscriptionPlan />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;