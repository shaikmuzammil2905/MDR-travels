import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Send, ChevronDown, CheckCircle2 } from 'lucide-react';
import ContactSection from './ContactSection';
import FAQSection from './FAQSection';

const ContactPage = ({ isHomePage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    destination: '',
    date: '',
    passengers: '',
    tripType: 'One Way',
    vehicleType: '4-Seater Car',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tripTypes = [
    "One Way",
    "Round Trip",
    "Local Travel",
    "Airport Transfer",
    "Outstation Trip",
    "Temple Tour",
    "Multi-Day Tour"
  ];

  const vehicleTypes = [
    "4-Seater Car",
    "6/7-Seater SUV",
    "7-Seater Premium SUV",
    "Tempo Traveller",
    "Other / Need Recommendation"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate required fields
    if (!formData.name || !formData.phone || formData.phone.length < 10) {
      alert("Please provide a valid Name and Phone Number.");
      setIsSubmitting(false);
      return;
    }

    // Format WhatsApp message
    const message = `*New Travel Enquiry*%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Email:* ${formData.email || 'N/A'}%0A
*Trip:* ${formData.pickup} to ${formData.destination}%0A
*Date:* ${formData.date}%0A
*Passengers:* ${formData.passengers}%0A
*Trip Type:* ${formData.tripType}%0A
*Vehicle:* ${formData.vehicleType}%0A
*Requirements:* ${formData.message || 'None'}`;

    setIsSubmitting(false);
    window.open(`https://wa.me/918247096395?text=${message}`, '_blank');
    setFormData({
      name: '', phone: '', email: '', pickup: '', destination: '',
      date: '', passengers: '', tripType: 'One Way', vehicleType: '4-Seater Car', message: ''
    });
  };

  return (
    <div className="contact-page-wrapper">
      {/* Hero Banner */}
      {!isHomePage && (
        <section className="about-hero-strip">
          <div className="container text-center">
            <h1 className="about-main-title">Plan Your Journey With MDR Travels</h1>
            <p className="about-main-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Have a question, need a vehicle, or planning a trip across Visakhapatnam, Andhra Pradesh or nearby destinations? Send us your travel requirements and our team will help you plan your journey.
            </p>
          </div>
        </section>
      )}

      {/* Contact Info Cards */}
      <ContactSection />

      {/* Contact Form Section */}
      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container">
          <div className="contact-form-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            <div className="reveal">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Send Us Your Travel Requirements</h2>
              <p style={{ color: '#64748b', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                Fill out the form below with your journey details, and we'll instantly connect you to our WhatsApp support team with a ready-to-send summary.
              </p>
              
              <div className="contact-features">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ padding: '1rem', background: '#e0e7ff', borderRadius: '50%', color: 'var(--primary-blue)' }}>
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--dark-blue)' }}>Instant WhatsApp Connect</h4>
                    <p style={{ margin: '0.25rem 0 0 0', color: '#64748b', fontSize: '0.9rem' }}>We respond quickly via WhatsApp.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ padding: '1rem', background: '#e0e7ff', borderRadius: '50%', color: 'var(--primary-blue)' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--dark-blue)' }}>Customized Quotes</h4>
                    <p style={{ margin: '0.25rem 0 0 0', color: '#64748b', fontSize: '0.9rem' }}>Get accurate pricing based on your needs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-container reveal" style={{ background: '#fff', padding: '2rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <form onSubmit={handleSubmit}>
                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label>Full Name *</label>
                    <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
                  </div>
                  
                  <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" className="form-input" value={formData.phone} onChange={handleChange} required placeholder="10-digit number" />
                    </div>
                    <div>
                      <label>Email Address</label>
                      <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} placeholder="Optional" />
                    </div>
                  </div>

                  <div>
                    <label>Pickup Location</label>
                    <input type="text" name="pickup" className="form-input" value={formData.pickup} onChange={handleChange} placeholder="City or Address" />
                  </div>
                  <div>
                    <label>Destination</label>
                    <input type="text" name="destination" className="form-input" value={formData.destination} onChange={handleChange} placeholder="City or Address" />
                  </div>

                  <div>
                    <label>Travel Date</label>
                    <input type="date" name="date" className="form-input" value={formData.date} onChange={handleChange} />
                  </div>
                  <div>
                    <label>Passengers</label>
                    <input type="number" name="passengers" className="form-input" min="1" value={formData.passengers} onChange={handleChange} placeholder="Number of people" />
                  </div>

                  <div>
                    <label>Trip Type</label>
                    <select name="tripType" className="form-input" value={formData.tripType} onChange={handleChange}>
                      {tripTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label>Vehicle Type</label>
                    <select name="vehicleType" className="form-input" value={formData.vehicleType} onChange={handleChange}>
                      {vehicleTypes.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>

                  <div style={{ gridColumn: '1 / -1' }}>
                    <label>Message / Travel Requirements</label>
                    <textarea name="message" className="form-input" value={formData.message} onChange={handleChange} placeholder="Any specific requirements?" rows="3"></textarea>
                  </div>

                  <div style={{ gridColumn: '1 / -1', marginTop: '1rem', display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }} disabled={isSubmitting}>
                      {isSubmitting ? 'Processing...' : <><Send size={20} /> Send Enquiry</>}
                    </button>
                    <a href="https://wa.me/918247096395" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                      <MessageCircle size={20} /> WhatsApp Us Directly
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact MDR / Quick Travel Assistance */}
      <section className="container section">
        <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">Quick Travel Assistance</h2>
          <p className="section-subtitle">We are committed to providing seamless support for all your travel needs.</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card reveal">
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--dark-blue)' }}>24/7 Support</h4>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Our team is available round the clock to assist you with urgent bookings, route changes, or general inquiries.</p>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '100ms' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--dark-blue)' }}>Transparent Pricing</h4>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>We provide clear, upfront quotes based on your exact requirements, with no hidden fees or surprise charges.</p>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '200ms' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--dark-blue)' }}>Expert Route Planning</h4>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Not sure about the best route? Our experienced team will help you plan the most efficient and scenic journey.</p>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

export default ContactPage;
