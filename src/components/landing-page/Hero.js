import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        // Start Hero Area
        <section className="hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="hero-content">
                            <h4>Welcome to Trashit Services</h4>
                            <h1>Your Eco-Friendly Waste Management Solution</h1>
                            <p>Efficient, reliable, and sustainable waste collection tailored to your needs. Join us in
                                making the planet cleaner, one pickup at a time.</p>
                            <div className="button">
                                <Link to="/dashboard" className="btn">Get Started</Link>
                            </div>
                        </div>
                    </div>
                     <div className="col-lg-7 col-12">
                        <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
                            <img className="main-image" src="https://via.placeholder.com/700x1000" alt="Trashit Services App" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // End Hero Area
    );
}

export default Hero;
