import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

function MainLayout() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
