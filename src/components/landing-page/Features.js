import React from 'react';

function Features() {
    return (
        // Start Features Area
        <section class="freatures section" id='about'>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-12">
                        <div class="image wow fadeInLeft" data-wow-delay=".3s">
                            <img src="https://via.placeholder.com/665x790" alt="Waste Management Features" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="content">
                            <h3 class="heading wow fadeInUp" data-wow-delay=".5s"><span>Core Features</span>Designed for<br/>
                                Efficient Waste Management</h3>
                            {/* <!-- Start Single Feature --> */}
                            <div class="single-feature wow fadeInUp" data-wow-delay=".6s">
                                <div class="f-icon">
                                    <i class="lni lni-dashboard"></i>
                                </div>
                                <h4>Seamless Scheduling</h4>
                                <p>Effortlessly schedule waste pickups from the comfort of your home with easy-to-use
                                    controls.</p>
                            </div>
                            {/* <!-- End Single Feature -->
                            <!-- Start Single Feature --> */}
                            <div class="single-feature wow fadeInUp" data-wow-delay=".7s">
                                <div class="f-icon">
                                    <i class="lni lni-pencil-alt"></i>
                                </div>
                                <h4>Recycle Rewards</h4>
                                <p>Earn tokens by sorting and recycling waste, and contribute to a cleaner, greener
                                    environment.</p>
                            </div>
                            {/* <!-- End Single Feature -->
                            <!-- Start Single Feature --> */}
                            <div class="single-feature wow fadeInUp" data-wow-delay="0.8s">
                                <div class="f-icon">
                                    <i class="lni lni-vector"></i>
                                </div>
                                <h4>Real-time Tracking</h4>
                                <p>Track your waste pickup in real-time using integrated geolocation for more efficient
                                    service.</p>
                            </div>
                            {/* <!-- End Single Feature --> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // End Features Area
    );
}

export default Features;
