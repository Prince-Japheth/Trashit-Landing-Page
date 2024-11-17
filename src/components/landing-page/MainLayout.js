import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Services from './Services';
import CTA from './CTA';
import Footer from './Footer';

function MainLayout() {
    return (
        <div>
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* Features Section */}
            <Features />

            {/* Services Section */}
            <Services />

            {/* Call to Action Section */}
            <CTA />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default MainLayout;
