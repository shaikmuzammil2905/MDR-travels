import React from 'react';
import { MapPin, Calendar, Car } from 'lucide-react';

const BookingForm = ({ className }) => {
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const pickup = formData.get('pickup');
    const destination = formData.get('destination');
    const date = formData.get('date');
    const vehicle = formData.get('vehicle');
    
    const message = `Hello MDR Travels, I would like to get a quote for a trip:
Pickup: ${pickup}
Destination: ${destination}
Date: ${date}
Vehicle Type: ${vehicle}`;

    const whatsappUrl = `https://wa.me/918247096395?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`booking-card ${className || ''}`}>
      <h3 className="booking-title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Where do you want to go?</h3>
      <form onSubmit={handleBookingSubmit}>
        <div className="booking-form-grid">
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Pickup Location</label>
            <div style={{ position: 'relative' }}>
              <MapPin size={18} style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }} />
              <input type="text" name="pickup" required className="form-control" style={{ paddingLeft: '2.5rem' }} placeholder="e.g. Visakhapatnam" />
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Destination</label>
            <div style={{ position: 'relative' }}>
              <MapPin size={18} style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }} />
              <input type="text" name="destination" required className="form-control" style={{ paddingLeft: '2.5rem' }} placeholder="e.g. Araku Valley" />
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Travel Date</label>
            <div style={{ position: 'relative' }}>
              <Calendar size={18} style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }} />
              <input type="date" name="date" required className="form-control" style={{ paddingLeft: '2.5rem' }} />
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label>Vehicle Type</label>
            <div style={{ position: 'relative' }}>
              <Car size={18} style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }} />
              <select name="vehicle" className="form-control" style={{ paddingLeft: '2.5rem' }}>
                <option value="Sedan">Sedan (4 Seater)</option>
                <option value="SUV">SUV (6-7 Seater)</option>
                <option value="Tempo Traveller">Tempo Traveller</option>
                <option value="Bus">Bus</option>
              </select>
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <button type="submit" className="btn btn-primary booking-btn" style={{ width: '100%', height: '46px', marginTop: 0, whiteSpace: 'nowrap' }}>
              Get a Quote
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
