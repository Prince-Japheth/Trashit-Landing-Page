import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/landing-page/Header';
import Hero from './components/landing-page/Hero';
import Features from './components/landing-page/Features';
import Services from './components/landing-page/Services';
import CTA from './components/landing-page/CTA';
import Footer from './components/landing-page/Footer';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <Routes>
                {/* Dashboard Route */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Landing Page */}
                <Route path="/" element={<MainLayout />} />
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
