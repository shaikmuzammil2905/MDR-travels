import React, { useState } from 'react';
import { MapPin, Calendar, Car, MessageCircle } from 'lucide-react';
import QuoteModal from './QuoteModal';

const BookingForm = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    setBookingData({
      pickup: formData.get('pickup'),
      destination: formData.get('destination'),
      date: formData.get('date'),
      vehicle: formData.get('vehicle'),
      package: formData.get('package')
    });
    
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={`booking-card-floating ${className || ''}`}>
        <div className="booking-card-header">
          <MapPin size={24} className="booking-header-icon" />
          <h3 className="booking-title">Where do you want to go?</h3>
        </div>
        
        <form onSubmit={handleBookingSubmit}>
          <div className="booking-form-grid">
            <div className="form-group">
              <label className="form-label-with-icon">
                <MapPin size={16} className="field-icon" />
                <span>Pickup Location</span>
              </label>
              <input 
                type="text" 
                name="pickup" 
                required 
                className="form-control" 
                placeholder="Enter pickup location" 
              />
            </div>

            <div className="form-group">
              <label className="form-label-with-icon">
                <MapPin size={16} className="field-icon" />
                <span>Destination</span>
              </label>
              <input 
                type="text" 
                name="destination" 
                required 
                className="form-control" 
                placeholder="Enter destination" 
              />
            </div>

            <div className="form-group">
              <label className="form-label-with-icon">
                <Calendar size={16} className="field-icon" />
                <span>Travel Date</span>
              </label>
              <input 
                type="date" 
                name="date" 
                required 
                className="form-control" 
              />
            </div>

            <div className="form-group">
              <label className="form-label-with-icon">
                <Car size={16} className="field-icon" />
                <span>Vehicle Type</span>
              </label>
              <select name="vehicle" className="form-control" defaultValue="Sedan (4 Seater)">
                <option value="Sedan (4 Seater)">Sedan (4 Seater)</option>
                <option value="SUV (6-7 Seater)">SUV (6-7 Seater)</option>
                <option value="Tempo Traveller (12-14 Seater)">Tempo Traveller (12-14 Seater)</option>
                <option value="Luxury Bus / Coach">Luxury Bus / Coach</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label-with-icon">
                <MapPin size={16} className="field-icon" />
                <span>Tour Package</span>
              </label>
              <select name="package" className="form-control" defaultValue="None">
                <option value="None">Select a Package (Optional)</option>
                <option value="Vizag One Day Tour">Vizag One Day Tour</option>
                <option value="Vizag 2 Days Tour">Vizag 2 Days Tour</option>
                <option value="Araku One Day Tour">Araku One Day Tour</option>
                <option value="Araku 2 Days Tour">Araku 2 Days Tour</option>
                <option value="Araku & Lambasingi Tour">Araku & Lambasingi Tour</option>
                <option value="Vizag Local Temple Tour">Vizag Local Temple Tour</option>
                <option value="Arasavilli – Sri Kurmam – Srimukhalingam">Arasavilli – Sri Kurmam – Srimukhalingam</option>
                <option value="Anakapalli – Annavaram – Pitapuram – Samarlakota">Anakapalli – Annavaram – Pitapuram – Samarlakota</option>
                <option value="Vadapalli Venkateswara Swamy Tour">Vadapalli Venkateswara Swamy Tour</option>
                <option value="Pancharama Temples Tour">Pancharama Temples Tour</option>
              </select>
            </div>

            <div className="booking-form-btn-col">
              <button type="submit" className="booking-quote-btn">
                <MessageCircle size={20} />
                <span>Get a Quote</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      {bookingData && (
        <QuoteModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          initialData={bookingData} 
        />
      )}
    </>
  );
};

export default BookingForm;
