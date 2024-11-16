import React from 'react';
import { BarChart, FileText, Lock, ShoppingCart, User, XCircle } from 'lucide-react';

const Sidenav = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white"
      style={{
        width: '300px',
        height: '100vh',
        borderRight: '1px solid #f6f7f8',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
      }}      
    >
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
        <img src="../../public/assets/images/logo/logo.svg" alt="Logo" className="me-2" style={{ width: '32px', height: '32px' }} />
      </a>
      <div className="my-3">
        <button className="btn btn-light w-100 text-start d-flex align-items-center gap-2">
          <img src="/path-to-team-icon.png" alt="Team" className="rounded" style={{ width: '24px', height: '24px' }} />
          Team 1
          <span className="badge bg-secondary ms-2">Free</span>
        </button>
      </div>
      <ul className="nav nav-pills flex-column gap-1 mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active d-flex align-items-center gap-2" style={{backgroundColor: '#edfef0'}}>
            <BarChart className="w-5 h-5" />
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark d-flex align-items-center gap-2">
            <User className="w-5 h-5" />
            User
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark d-flex align-items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Product
            <span className="badge bg-danger-subtle text-danger ms-auto">+3</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark d-flex align-items-center gap-2">
            <FileText className="w-5 h-5" />
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark d-flex align-items-center gap-2">
            <Lock className="w-5 h-5" />
            Sign in
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-dark d-flex align-items-center gap-2">
            <XCircle className="w-5 h-5" />
            Not found
          </a>
        </li>
      </ul>
      <div className="mt-auto">
        <div className="p-3 bg-light rounded">
          <h6 className="text-primary mb-2">More features?</h6>
          <p className="text-muted small mb-3">From only $69</p>
          <img
            src="/path-to-features-illustration.png"
            alt="Features illustration"
            className="mb-3 w-100"
            style={{ maxWidth: '200px', height: 'auto' }}
          />
          <button className="btn btn-dark w-100">Upgrade to Pro</button>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;