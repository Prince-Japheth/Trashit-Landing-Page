import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Step 1: Ask email, Step 2: Reset password
  const [passwordError, setPasswordError] = useState(""); // Error for password mismatch
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setStep(2); // Move to Step 2
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }

    setPasswordError(""); // Clear error if passwords match
    alert("Your password has been reset successfully!"); // Action after resetting password
    navigate('/dashboard');
  };

  return (
    <section className="bg-white">
      <header className="header navbar-areaa sticky py-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="nav-inner">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="/">
                    <img src="assets/images/logo/logo.svg" alt="#" />
                  </a>
                  <div className="button home-btn ms-auto">
                    <a
                      href="#!"
                      className="btn"
                      style={{ backgroundColor: "#28a745", color: "#fff" }}
                    >
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
                    <p
                      className="text-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                      style={{ color: "#28a745" }}
                    >
                      {step === 1 ? "Forgot Password" : "Reset Password"}
                    </p>
                    {step === 1 ? (
                      <form className="mx-1 mx-md-4" onSubmit={handleEmailSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="resetEmail"
                              className="form-control"
                              required
                            />
                            <label className="form-label" htmlFor="resetEmail">
                              Your Email
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-lg w-100"
                            style={{ backgroundColor: "#28a745", color: "#fff" }}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div>
                        <p className="text-center mb-4">
                          We've sent you a reset password link to your email.
                          <a
                            href="#!"
                            onClick={(e) => {
                              e.preventDefault();
                              setStep(3); // Move to reset password form
                            }}
                            style={{ color: "#28a745", marginLeft: "5px" }}
                          >
                            Open Email
                          </a>
                        </p>
                      </div>
                    )}

                    {step === 3 && (
                      <form className="mx-1 mx-md-4" onSubmit={handlePasswordSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="newPassword"
                              className="form-control"
                              required
                            />
                            <label className="form-label" htmlFor="newPassword">
                              New Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="confirmPassword"
                              className="form-control"
                              required
                            />
                            <label className="form-label" htmlFor="confirmPassword">
                              Confirm Password
                            </label>
                          </div>
                        </div>
                        {passwordError && (
                          <p className="text-danger mb-4">{passwordError}</p>
                        )}
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-lg w-100"
                            style={{ backgroundColor: "#28a745", color: "#fff" }}
                          >
                            Reset Password
                          </button>
                        </div>
                      </form>
                    )}
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

export default ForgotPassword;
