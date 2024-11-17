import React, { useState } from 'react';
import Sidenav from '../components/dashboard/Sidenav';
import DashboardHeader from '../components/dashboard/DashboardHeader';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; 

function App() {
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

                    <Home />


                </div>


            </div>
        </div>
    );
}

export default App;
