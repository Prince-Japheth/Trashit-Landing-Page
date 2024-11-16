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
          <a href="#!" className="nav-link active d-flex align-items-center gap-2" style={{backgroundColor: '#afffbe', color: '#52b42b'}}>
            <BarChart className="w-5 h-5" />
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a href="#!" className="nav-link text-dark d-flex align-items-center gap-2">
            <User className="w-5 h-5" />
            User
          </a>
        </li>
        <li className="nav-item">
          <a href="#!" className="nav-link text-dark d-flex align-items-center gap-2">
            <Lock className="w-5 h-5" />
            Sign in
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;