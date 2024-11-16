import React from 'react';
import Sidenav from '../components/Sidenav';
import DashboardHeader from '../components/DashboardHeader';


const Dashboard = () => {
  return (
    <div className="d-flex vh-100">
      <Sidenav />
      <div className="flex-grow-1 d-flex flex-column" style={{ backgroundColor: '#f9fafb' }}>
        <DashboardHeader />
        <div className="flex-grow-1 p-3">
          {/* Main content area */}
          <h1>Welcome to the Dashboard</h1>
          <p>This is where your main content will go.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;