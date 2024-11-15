import React from "react";

function Footer() {
    return (
        
            <footer className="footer section">
                {/* <!-- Start Footer Top --> */}
                <div className="footer-top">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    {/* <!-- Single Widget --> */}
                                    <div className="single-footer f-about">
                                        <div className="logo">
                                            <a href="index.html">
                                                <h2 style={{ color: '#ffffff', fontSize: '36px', fontWeight: 'bold' }}>Trashit</h2>
                                            </a>
                                        </div>
                                        <p>Making the world a cleaner place through responsible waste management and innovative solutions.</p>
                                        <h4 className="social-title">Follow Us On:</h4>
                                        <ul className="social">
                                            <li><a href="#!" aria-label="Facebook"><i className="lni lni-facebook-filled"></i></a></li>
                                            <li><a href="#!" aria-label="Instagram"><i className="lni lni-instagram"></i></a></li>
                                            <li><a href="#!" aria-label="Twitter"><i className="lni lni-twitter-original"></i></a></li>
                                            <li><a href="#!" aria-label="LinkedIn"><i className="lni lni-linkedin-original"></i></a></li>
                                            <li><a href="#!" aria-label="Pinterest"><i className="lni lni-pinterest"></i></a></li>
                                            <li><a href="#!" aria-label="YouTube"><i className="lni lni-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- End Single Widget --> */}
                                </div>
                                <div className="col-lg-2 col-md-6 col-12">
                                    {/* <!-- Single Widget --> */}
                                    <div className="single-footer f-link">
                                        <h3>Our Services</h3>
                                        <ul>
                                            <li><a href="#!">Waste Collection</a></li>
                                            <li><a href="#!">Recycling Programs</a></li>
                                            <li><a href="#!">Waste Disposal</a></li>
                                            <li><a href="#!">Consulting</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- End Single Widget --> */}
                                </div>
                                <div className="col-lg-2 col-md-6 col-12">
                                    {/* <!-- Single Widget --> */}
                                    <div className="single-footer f-link">
                                        <h3>Quick Links</h3>
                                        <ul>
                                            <li><a href="#!">Pricing</a></li>
                                            <li><a href="#!">FAQs</a></li>
                                            <li><a href="#!">Blog</a></li>
                                            <li><a href="#!">Contact Us</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- End Single Widget --> */}
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    {/* <!-- Single Widget --> */}
                                    <div className="single-footer newsletter">
                                        <h3>Subscribe</h3>
                                        <p>Stay informed with the latest updates and eco-friendly initiatives by subscribing to our newsletter.</p>
                                        <form action="#" method="get" target="_blank" className="newsletter-form">
                                            <input name="EMAIL" placeholder="Your Email Address" required type="email"/>
                                            <div className="button">
                                                <button type="submit" className="sub-btn"><i className="lni lni-envelope"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!-- End Single Widget --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer Top --> */}

                {/* <!-- Start Copyright Area --> */}
                <div className="copyright-area">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <p className="copyright-text">© 2024 Trashit - All Rights Reserved</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <p className="copyright-owner">Designed and Developed by bla bla</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Copyright Area --> */}
            </footer>
    );
}

export default Footer;
