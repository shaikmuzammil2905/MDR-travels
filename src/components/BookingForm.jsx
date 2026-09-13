import React from 'react';
import { MapPin, Calendar, Car, MessageCircle } from 'lucide-react';

const BookingForm = ({ className }) => {
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const pickup = formData.get('pickup');
    const destination = formData.get('destination');
    const date = formData.get('date');
    const vehicle = formData.get('vehicle');
    
    const message = `Hello MDR Travels, I would like to get a quote for a trip:
Pickup Location: ${pickup}
Destination: ${destination}
Travel Date: ${date}
Vehicle Type: ${vehicle}`;

    const whatsappUrl = `https://wa.me/918247096395?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
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

          <div className="booking-form-btn-col">
            <button type="submit" className="booking-quote-btn">
              <MessageCircle size={20} />
              <span>Get a Quote</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
