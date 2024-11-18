import React from 'react';

const plans = [
  {
    title: 'Bronze Package',
    price: '10,000',
    frequency: 'month',
    description: 'Ideal for small households or businesses with minimal waste generation.',
    image: 'https://easydispose.netlify.app/images/small_house.svg',
    features: ['Bi-weekly pickups', 'Waste collection and disposal'],
  },
  {
    title: 'Silver Package',
    price: '15,000',
    frequency: 'month',
    description: 'Suitable for medium-sized households or businesses with moderate waste generation.',
    image: 'https://easydispose.netlify.app/images/medium_house.svg',
    features: ['Weekly pickups', 'One special disposal per month'],
  },
  {
    title: 'Gold Package',
    price: '20,000',
    frequency: 'month',
    description: 'Designed for large households or businesses with high waste generation.',
    image: 'https://easydispose.netlify.app/images/company.svg',
    features: [
      'Daily pickups',
      'Unlimited special waste disposal',
      'Premium waste management consultation',
    ],
  },
];

const SubscriptionPlan = () => {
  return (
    <div
      className="container py-5"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
      }}
    >
      <div className="text-center mb-5">
        <h2
          style={{
            fontWeight: '700',
            color: '#333',
            fontSize: '2.5rem',
          }}
        >
          Choose Your Plan
        </h2>
        <p
          style={{
            color: '#666',
            fontSize: '1rem',
            marginTop: '10px',
          }}
        >
          Select the package that best fits your lifestyle or business needs.
        </p>
      </div>
      <div className="row g-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-4">
            <div
              className="subscription-card"
              style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%', // Ensures cards are equal height
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div className="text-center p-4">
                <div
                  style={{
                    width: '100%',
                    height: '150px',
                    marginBottom: '1rem',
                  }}
                >
                  <img
                    src={plan.image}
                    alt={`${plan.title} icon`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain', // Maintains aspect ratio
                    }}
                  />
                </div>
                <h5
                  style={{
                    color: '#51b42b',
                    fontWeight: '600',
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  {plan.title}
                </h5>
                <h6
                  style={{
                    fontSize: '1.2rem',
                    color: '#333',
                    marginBottom: '1rem',
                  }}
                >
                  NGN {plan.price}/
                  <span style={{ fontSize: '0.85rem', color: '#777' }}>
                    {plan.frequency}
                  </span>
                </h6>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#666',
                    marginBottom: '1.5rem',
                  }}
                >
                  {plan.description}
                </p>
                <button
                  style={{
                    backgroundColor: '#51b42b',
                    border: 'none',
                    color: '#fff',
                    padding: '0.7rem 1.5rem',
                    borderRadius: '5px',
                    fontWeight: '600',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = '#3b8e22')
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = '#51b42b')
                  }
                >
                  Get started
                </button>
              </div>
              <div
                className="p-3 mt-auto"
                style={{
                  backgroundColor: '#f7f7f7',
                  borderTop: '1px solid #ddd',
                }}
              >
                <ul
                  style={{
                    listStyle: 'none',
                    padding: '0',
                    margin: '0',
                  }}
                >
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        color: '#555',
                        fontSize: '0.9rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <i
                        className="bi bi-check-circle-fill"
                        style={{
                          color: '#51b42b',
                          marginRight: '8px',
                        }}
                      ></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlan;
