import React from 'react';
import ContactSection from './ContactSection';

const ContactPage = () => {
  return (
    <div className="contact-page-wrapper" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="container text-center reveal">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">
          Have a question or need to book a ride? Reach out to us, and we'll get back to you as soon as possible.
        </p>
      </div>
      <ContactSection />
    </div>
  );
};

export default ContactPage;
