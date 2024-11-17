import React from "react";

function CTA() {
    return (

        <div>

            <section class="intro-video-area section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="inner-content-head">
                                <div class="inner-content">
                                    <img class="shape1" src="assets/images/video/shape1.svg" alt="#" />
                                    <img class="shape2" src="assets/images/video/shape2.svg" alt="#" />
                                    <div class="section-title">
                                        <span class="wow zoomIn" data-wow-delay=".2s">Get Started with Trashit</span>
                                        <h2 class="wow fadeInUp" data-wow-delay=".4s">Download Our App Now</h2>
                                        <p class="wow fadeInUp" data-wow-delay=".6s">Manage your waste disposal easily with the
                                            Trashit app. Download it now and experience convenience at your fingertips!</p>
                                    </div>
                                    <div class="intro-video-play">
                                        <div class="play-thumb wow zoomIn"
 data-wow-delay=".2s">
                                            <a href="https://www.example.com" class="glightbox video"><i  style={{ marginRight: '5px' }}
                                                class="lni lni-download"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="call-action">
                <div class="container">
                    <div class="inner-content">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-7 col-12">
                                <div class="text">
                                    <h2>Download Our App &
                                        <br /> Start your free trial today.
                                    </h2>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-5 col-12">
                                <div class="button">
                                    <a href="pricing.html" class="btn"><i class="lni lni-apple"></i> App Store
                                    </a>
                                    <a href="about-us.html" class="btn btn-alt"><i class="lni lni-play-store"></i> Google
                                        Play</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default CTA;
