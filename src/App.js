import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Dashboard from './pages/Dashboard';
import MainLayout from './components/landing-page/MainLayout';
import AuthComponent from './components/AuthComponent';
import ForgotPassword from './components/ForgotPassword';
import FundWallet from './pages/FundWallet';
import CardPayment from './pages/CardPayment';
import RequestPickup from './pages/RequestPickup';
import SubscriptionPlan from './pages/SubscriptionPlan';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout for initial page */}
        <Route path="/" element={<MainLayout />} />
        
        {/* AuthComponent for Sign In/Sign Up */}
        <Route path="/auth-component" element={<AuthComponent />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Dashboard and its sub-routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="fund-wallet" element={<FundWallet />} />
          <Route path="card-payment" element={<CardPayment />} />
          <Route path="request-pickup" element={<RequestPickup />} />
          <Route path="subscription-plan" element={<SubscriptionPlan />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
