import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Car } from 'lucide-react';
import heroBg from '../assets/image copy 3.png';

const Hero = () => {
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Gather form data
    const formData = new FormData(e.target);
    const pickup = formData.get('pickup');
    const destination = formData.get('destination');
    const date = formData.get('date');
    const vehicle = formData.get('vehicle');
    
    // Construct WhatsApp message
    const message = `Hello MDR Travels, I would like to get a quote for a trip:
Pickup: ${pickup}
Destination: ${destination}
Date: ${date}
Vehicle Type: ${vehicle}`;

    const whatsappUrl = `https://wa.me/918247096395?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroBg} alt="MDR Travels Premium Bus" />
      </div>
      <div className="hero-overlay"></div>
      
      <div className="container" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="hero-content reveal">
          <h1 className="hero-title">
            Travel Comfortably.<br />
            Travel With <span style={{ color: 'var(--primary-yellow)' }}>MDR</span>.
          </h1>
          <p className="hero-subtitle">
            Safe, comfortable and reliable travel services in Visakhapatnam and
            across destinations in Andhra Pradesh.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              <span>Explore Services</span>
              <ArrowRight size={20} />
            </Link>
            <a href="https://wa.me/918247096395" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="hero-booking-card reveal" style={{ transitionDelay: '200ms' }}>
          <h3 className="booking-title">Where do you want to go?</h3>
          <form onSubmit={handleBookingSubmit}>
            <div className="form-group">
              <label>Pickup Location</label>
              <div style={{ position: 'relative' }}>
                <MapPin size={18} style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }} />
                <input type="text" name="pickup" required className="form-control" style={{ paddingLeft: '2.5rem' }} placeholder="e.g. Visakhapatnam" />
              </div>
            </div>
            <div className="form-group">
              <label>Destination</label>
              <div style={{ position: 'relative' }}>
                <MapPin size={18} style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }} />
                <input type="text" name="destination" required className="form-control" style={{ paddingLeft: '2.5rem' }} placeholder="e.g. Araku Valley" />
              </div>
            </div>
            <div className="form-group">
              <label>Travel Date</label>
              <div style={{ position: 'relative' }}>
                <Calendar size={18} style={{ position: 'absolute', left: '10px', top: '12px', color: '#888' }} />
                <input type="date" name="date" required className="form-control" style={{ paddingLeft: '2.5rem' }} />
              </div>
            </div>
            <div className="form-group">
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
            <button type="submit" className="btn btn-primary booking-btn">
              Get a Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
