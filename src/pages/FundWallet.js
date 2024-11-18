import React from 'react';
import { useLocation } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ArrowLeft2, Bank, Card, Copy } from 'iconsax-react';

export default function FundWallet() {
  const location = useLocation();
  const accountNumber = '704 534 7369';

  const handleCopy = () => {
    alert('Account number copied!');
  };

  // Check if the current path is the one for 'Fund Wallet' or any other route
  const isActive = location.pathname === '/fund-wallet';

  return (
    <div className="px-3">
      {/* Main Content */}
      <div className="row ms-lg-5">
        <div className="col-lg-8">
          {/* Welcome Section */}
          <div className="mb-3">
            <h2 className="fw-bold mb-1" style={{ color: '#51b42b' }}>Fund Your Wallet</h2>
            <p className="text-muted">Choose your preferred method to add funds to your wallet</p>
          </div>

          <div className="row g-4">
            {/* Bank Transfer Card */}
            <div className="col-12">
              <div className="card border-0 shadow-sm hover-shadow" 
                   style={{ 
                     borderRadius: '16px', 
                     transition: 'all 0.3s ease',
                     overflow: 'hidden'
                   }}>
                {/* Card Header */}
                <div className="p-4" style={{ backgroundColor: '#f8fff6' }}>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle p-3 me-3" 
                         style={{ backgroundColor: '#e3ffdb' }}>
                      <Bank size="32" color="#51b42b" variant="Bold" />
                    </div>
                    <div>
                      <h4 className="mb-1 fw-semibold">Bank Transfer</h4>
                      <p className="text-muted mb-0">Add money via mobile or internet banking</p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  {/* Bank Details */}
                  <div className="row g-3 mb-4">
                    <div className="col-6">
                      <p className="text-muted mb-1">Bank Name</p>
                      <p className="fw-medium mb-0">Zenith Bank</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted mb-1">Account Name</p>
                      <p className="fw-medium mb-0">TrashIt Technologies</p>
                    </div>
                  </div>

                  {/* Account Number Section */}
                  <div className="bg-light p-4 rounded-3">
                    <div className="text-center mb-3">
                      <p className="text-muted mb-2">Your Unique Account Number</p>
                      <h3 className="fw-bold mb-0" style={{ color: '#51b42b', letterSpacing: '2px' }}>
                        {accountNumber}
                      </h3>
                    </div>
                    <CopyToClipboard text={accountNumber} onCopy={handleCopy}>
                      <button 
                        className={`btn w-100 d-flex align-items-center justify-content-center gap-2 ${isActive ? 'active' : ''}`}
                        style={{ 
                          backgroundColor: '#51b42b',
                          color: 'white',
                          padding: '12px',
                          borderRadius: '8px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#469624'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#51b42b'}
                      >
                        <Copy size="20" />
                        Copy Account Number
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center gap-3 my-2">
                <hr className="flex-grow-1" style={{ borderColor: '#e0e0e0' }} />
                <span className="text-muted fw-medium">OR</span>
                <hr className="flex-grow-1" style={{ borderColor: '#e0e0e0' }} />
              </div>
            </div>

            {/* Card Payment Option */}
            <div className="col-12">
              <div 
                className="card border-0 shadow-sm hover-shadow" 
                style={{ 
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#f8fff6'
                }}
                
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="p-4">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle p-3 me-3" 
                         style={{ backgroundColor: '#e3ffdb' }}>
                      <Card size="32" color="#51b42b" variant="Bold" />
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="mb-1 fw-semibold">Pay with Card</h4>
                      <p className="text-muted mb-0">
                        Quick and secure card payment
                      </p>
                    </div>
                    <ArrowLeft2 
                      size="24" 
                      color="#51b42b" 
                      style={{ transform: 'rotate(180deg)' }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
