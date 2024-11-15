function Header() {
  return (
    // Start Header Area
    <header className="header navbar-area">
      <div className="container">


        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              {/* Start Navbar */}
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src="assets/images/logo/white-logo.svg" alt="#" />
                </a>
                <button
                  className="navbar-toggler mobile-menu-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a
                        href="#!"
                        className="active"
                        aria-label="Toggle navigation"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#about" aria-label="Toggle navigation">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#services" aria-label="Toggle navigation">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" aria-label="Toggle navigation">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                {/* navbar collapse */}
                <div className="button home-btn">
                  <a href="signup.html" className="btn">
                    Download App
                  </a>
                </div>
              </nav>
              {/* End Navbar */}
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      {/* container */}
    </header>
    // End Header Area
  );
}

export default Header;
