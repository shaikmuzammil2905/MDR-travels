import React from 'react';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="container section" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
      <div className="about-contact-card reveal">
        <div className="contact-card-content">
          <h3 style={{ fontSize: '1.8rem', color: 'var(--dark-blue)', fontWeight: 800, marginBottom: '0.75rem' }}>
            Visit or Contact Our Office
          </h3>
          <p style={{ color: '#64748b', fontSize: '1.05rem', marginBottom: '2rem' }}>
            We are conveniently located in Visakhapatnam and always ready to serve you.
          </p>

          <div className="about-contact-items-grid">
            <div className="about-info-item">
              <MapPin size={22} className="about-info-icon" />
              <div>
                <strong>Address</strong>
                <p>58-32-6, Adharsha Nagar, Kancharapalem, Visakhapatnam, Andhra Pradesh</p>
              </div>
            </div>

            <div className="about-info-item">
              <Phone size={22} className="about-info-icon" />
              <div>
                <strong>Direct Calling</strong>
                <p><a href="tel:8247096395">+91 82470 96395</a></p>
              </div>
            </div>

            <div className="about-info-item">
              <MessageCircle size={22} className="about-info-icon" />
              <div>
                <strong>WhatsApp Booking</strong>
                <p><a href="https://wa.me/918247096395" target="_blank" rel="noopener noreferrer">+91 82470 96395</a></p>
              </div>
            </div>

            <div className="about-info-item">
              <Mail size={22} className="about-info-icon" />
              <div>
                <strong>Official Email</strong>
                <p><a href="mailto:mdrtravels26@gmail.com">mdrtravels26@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/918247096395?text=Hi%20MDR%20Travels,%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20book%20a%20vehicle." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
              style={{ fontSize: '1.05rem', padding: '0.85rem 1.75rem' }}
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
            <a 
              href="tel:8247096395" 
              className="btn btn-primary"
              style={{ fontSize: '1.05rem', padding: '0.85rem 1.75rem' }}
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
