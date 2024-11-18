import React, { useState } from 'react';
import { Lock, Card as CardIcon } from 'iconsax-react';

export default function CardPayment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(value);
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = `${value.slice(0,2)}/${value.slice(2,4)}`;
    }
    setExpiryDate(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for payment processing
    alert('Processing payment...');
  };

  return (
    <div className="px-3">
      <div className="row ms-lg-5">
        <div className="col-lg-6">
          <div className="mb-4">
            <h2 className="fw-bold mb-0" style={{ color: '#51b42b' }}>
              Pay with Card
            </h2>
          </div>

          {/* Payment Form */}
          <form onSubmit={handleSubmit}>
            <div className="card border-0 shadow-sm" style={{ borderRadius: '16px' }}>
              <div className="p-4">
                {/* Card Number Input */}
                <div className="mb-3">
                  <label className="form-label text-muted">Card Number</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <CardIcon size="24" color="#51b42b" />
                    </span>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      maxLength="19"
                      required 
                    />
                  </div>
                </div>

                {/* Expiry and CVV Row */}
                <div className="row">
                  <div className="col-7 mb-3">
                    <label className="form-label text-muted">Expiry Date</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={handleExpiryChange}
                      maxLength="5"
                      required 
                    />
                  </div>
                  <div className="col-5 mb-3">
                    <label className="form-label text-muted">CVV</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white">
                        <Lock size="20" color="#51b42b" />
                      </span>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                        maxLength="3"
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn w-100 mt-2" 
                  style={{ 
                    backgroundColor: '#51b42b', 
                    color: 'white', 
                    padding: '12px', 
                    borderRadius: '8px' 
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#469624'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#51b42b'}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </form>

          {/* Security Note */}
          <div className="text-center mt-3">
            <p className="text-muted small">
              <Lock size="16" color="#6c757d" className="me-1" />
              Your payment is secure and encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}