import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AuthComponent = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Sign In
  const [isEstateMember, setIsEstateMember] = useState(false); // Track the checkbox state
  const navigate = useNavigate();

  // Handle form submission (redirect to dashboard after successful login/signup)
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard'); // Redirect to dashboard after submission
  };

  // Handle checkbox toggle
  const handleCheckboxChange = () => {
    setIsEstateMember((prev) => !prev);
  };

  return (
    <section className="bg-white">
      <header className="header navbar-areaa sticky py-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="nav-inner">
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand" to="/">
                    <img src="assets/images/logo/logo.svg" alt="#" />
                  </Link>
                  <div className="button home-btn ms-auto">
                    <a href="#!" className="btn" style={{ backgroundColor: '#28a745', color: '#fff' }}>
                      Download App
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <br /> <br />

      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black border-0">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ color: '#28a745' }}>
                      {isSignUp ? 'Sign Up' : 'Sign In'}
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      {isSignUp && (
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" required />
                            <label className="form-label" htmlFor="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>
                      )}

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" className="form-control" required />
                          <label className="form-label" htmlFor="form3Example3c">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" className="form-control" required />
                          <label className="form-label" htmlFor="form3Example4c">
                            Password
                          </label>
                        </div>
                      </div>

                      {isSignUp && (
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              required
                            />
                            <label className="form-label" htmlFor="form3Example4cd">
                              Confirm your password
                            </label>
                          </div>
                        </div>
                      )}

                      {isSignUp && (
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            checked={isEstateMember}
                            onChange={handleCheckboxChange} // Toggle the checkbox state
                          />
                          <label className="form-check-label" htmlFor="form2Example3">
                            Estate Member
                          </label>
                        </div>
                      )}

                      {isEstateMember && (
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-building fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <select id="estateSelect" className="form-control" required>
                              <option value="">Select your estate</option>
                              <option value="estate1">Estate 1</option>
                              <option value="estate2">Estate 2</option>
                              <option value="estate3">Estate 3</option>
                            </select>
                            <label className="form-label" htmlFor="estateSelect">
                              Choose Estate
                            </label>
                          </div>
                        </div>
                      )}

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-lg w-100"
                          style={{ backgroundColor: '#28a745', color: '#fff' }}
                        >
                          {isSignUp ? 'Register' : 'Login'}
                        </button>
                      </div>
                    </form>

                    {!isSignUp && (
                      <div className="text-center mt-3">
                        <Link to="/forgot-password" style={{ color: '#28a745' }}>
                          Forgot Password?
                        </Link>
                      </div>
                    )}

                    <div className="text-center mt-3">
                      <a
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsSignUp((prev) => !prev); // Toggle between sign up and sign in
                        }}
                        style={{ color: '#28a745' }}
                      >
                        {isSignUp ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up'}
                      </a>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthComponent;
