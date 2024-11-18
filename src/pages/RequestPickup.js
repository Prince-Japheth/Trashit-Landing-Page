import React, { useState, useEffect, useRef } from 'react';
import { SearchNormal1 } from 'iconsax-react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 0,
  lng: 0
};

const customStyles = `
  .pac-container {
    margin-top: -12px;
    transform: translateY(-100%);
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
    padding: 8px 0;
  }

  .pac-item {
    padding: 8px 16px;
    cursor: pointer;
  }

  .pac-item:hover {
    background-color: #f8f9fa;
  }

  .pac-item-query {
    font-size: 14px;
    color: #333;
  }

  .pac-matched {
    font-weight: bold;
  }
`;

const RequestPickup = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(center);
  const [isLoading, setIsLoading] = useState(true);
  const [addressDetails, setAddressDetails] = useState({
    streetAddress: '',
    apartmentUnit: '',
    additionalInfo: ''
  });
  const searchInputRef = useRef(null);

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = customStyles;
    document.head.appendChild(styleSheet);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    }

    return () => {
      styleSheet.remove();
    };
  }, []);

  const onMapLoad = (map) => {
    setIsLoading(false);
    initializeSearchBox(map);
  };

  const initializeSearchBox = (map) => {
    if (searchInputRef.current && window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(searchInputRef.current, {
        fields: ['formatted_address', 'geometry', 'name'],
        componentRestrictions: { country: 'us' }
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();

        if (!place.geometry || !place.geometry.location) return;

        map.panTo(place.geometry.location);
        map.setZoom(17);

        setSelectedLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address: place.formatted_address
        });

        setAddressDetails(prev => ({
          ...prev,
          streetAddress: place.formatted_address
        }));
      });

      map.addListener('bounds_changed', () => {
        autocomplete.setBounds(map.getBounds());
      });
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedLocation && addressDetails.streetAddress) {
      const submitData = {
        location: selectedLocation,
        addressDetails: addressDetails
      };
      console.log('Submitting pickup request:', submitData);
      alert('Pickup request submitted successfully!');
    } else {
      alert('Please select a location and provide address details');
    }
  };

  return (
    <div className="position-relative vh-100">
      {isLoading && (
        <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-light" style={{ zIndex: 1 }}>
          <div className="d-flex flex-column align-items-center">
            <div className="spinner-border text-success mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-muted">Loading map...</p>
          </div>
        </div>
      )}

      <LoadScript
        googleMapsApiKey="AIzaSyCKGOncl1C9CKmSzx9ExmibDumfVSJWl6s"
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={currentLocation}
          zoom={15}
          onLoad={onMapLoad}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
          }}
        >
          {selectedLocation && (
            <Marker
              position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
            />
          )}
        </GoogleMap>
      </LoadScript>

      <div className="position-absolute start-0 end-0" style={{ bottom: '20px' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow rounded-4">
                <div className="card-body p-3">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3" style={{ position: 'relative' }}>
                      <span className="input-group-text border-0 bg-white">
                        <SearchNormal1 size="20" color="#6c757d"/>
                      </span>
                      <input
                        ref={searchInputRef}
                        type="text"
                        className="form-control border-0 shadow-none"
                        placeholder="Search location"
                        aria-label="Search location"
                        disabled={isLoading}
                        autoComplete="off"
                      />
                    </div>

                    {selectedLocation && (
                      <div className="address-details animate__animated animate__fadeIn">
                        <div className="mb-3">
                          <label className="form-label">Street Address</label>
                          <input
                            type="text"
                            className="form-control"
                            name="streetAddress"
                            value={addressDetails.streetAddress}
                            onChange={handleAddressChange}
                            placeholder="Street address"
                            required
                          />
                        </div>
                        
                        <div className="mb-3">
                          <label className="form-label">Apartment/Unit Number</label>
                          <input
                            type="text"
                            className="form-control"
                            name="apartmentUnit"
                            value={addressDetails.apartmentUnit}
                            onChange={handleAddressChange}
                            placeholder="Apartment or unit number (optional)"
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Additional Information</label>
                          <textarea
                            className="form-control"
                            name="additionalInfo"
                            value={addressDetails.additionalInfo}
                            onChange={handleAddressChange}
                            placeholder="Delivery instructions, gate code, etc. (optional)"
                            rows="2"
                          />
                        </div>

                        <button 
                          className="btn text-white w-100 rounded-3"
                          style={{ backgroundColor: '#51b42b' }}
                          type="submit"
                        >
                          Confirm Pickup Location
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPickup;