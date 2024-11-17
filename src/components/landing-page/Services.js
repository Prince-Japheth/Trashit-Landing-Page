import React from "react";

function Services() {
  return (
    // Start Services Area
    <div className="services section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">What we offer</h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">Our Waste Management Services</h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Our services are designed to make waste management easier, more efficient, and eco-friendly for homes and estates.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Waste Pickup */}
          <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
            <div className="single-service">
              <div className="main-icon">
                <i className="lni lni-trash-can"></i> {/* Free trash can icon */}
              </div>
              <h4 className="text-title">Waste Pickup</h4>
              <p>On-demand waste collection from your doorstep, ensuring timely and efficient disposal.</p>
            </div>
          </div>

          {/* Recycling Services */}
          <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
            <div className="single-service">
              <div className="main-icon">
                <i className="lni lni-leaf"></i> {/* Free leaf icon for eco-friendly services */}
              </div>
              <h4 className="text-title">Recycling Services</h4>
              <p>Separate your recyclables and earn rewards while helping the planet. We handle the recycling process responsibly.</p>
            </div>
          </div>

          {/* Token Rewards */}
          <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
            <div className="single-service">
              <div className="main-icon">
                <i className="lni lni-gift"></i> {/* Free gift icon */}
              </div>
              <h4 className="text-title">Token Rewards</h4>
              <p>Earn recycle tokens for every eco-friendly action you take, redeemable for discounts and services.</p>
            </div>
          </div>

          {/* Flexible Subscription Plans */}
          <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
            <div className="single-service">
              <div className="main-icon">
                <i className="lni lni-wallet"></i> {/* Free wallet icon */}
              </div>
              <h4 className="text-title">Flexible Subscription Plans</h4>
              <p>Choose from multiple subscription packages to suit your needs, whether you're in an estate or not.</p>
            </div>
          </div>

          {/* Manual Pickup Request */}
          <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
            <div className="single-service">
              <div className="main-icon">
                <i className="lni lni-pointer"></i> {/* Free pointer icon */}
              </div>
              <h4 className="text-title">Manual Pickup Request</h4>
              <p>Request a waste pickup anytime using our app, with flexible payment options based on distance.</p>
            </div>
          </div>

          {/* Estate Waste Management */}
          <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
            <div className="single-service">
              <div className="main-icon">
                <i className="lni lni-apartment"></i> {/* Free apartment icon */}
              </div>
              <h4 className="text-title">Estate Waste Management</h4>
              <p>Comprehensive waste management services tailored for estates, with customized pickup schedules and packages.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // End Services Area
  );
}

export default Services;
