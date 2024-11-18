import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Dashboard from './pages/Dashboard';
import MainLayout from './components/landing-page/MainLayout';
import FundWallet from './pages/FundWallet';
import RequestPickup from './pages/RequestPickup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/fund-wallet" element={<FundWallet />} />
        <Route path="/request-pickup" element={<RequestPickup />} />
      </Routes>
    </Router>
  );
}

export default App;
