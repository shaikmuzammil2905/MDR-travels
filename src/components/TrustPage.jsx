import React from 'react';
import TrustStrip from './TrustStrip';

const TrustPage = () => {
  return (
    <div className="trust-page-wrapper" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="container text-center reveal">
        <h1 className="section-title">Why Trust Us?</h1>
        <p className="section-subtitle">
          Your safety, comfort, and satisfaction are our top priorities. Here is what makes MDR Travels the reliable choice for your journey.
        </p>
      </div>

      <div className="container reveal" style={{ maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center', lineHeight: '1.8', color: '#475569', fontSize: '1.1rem' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          At MDR Travels, we believe that the journey is just as important as the destination. We have built our reputation on a foundation of reliability, transparency, and uncompromised quality. Whether you are traveling for business, a family vacation, or a daily commute, we ensure that every ride with us meets the highest standards of safety and comfort.
        </p>
        <p>
          Our modern fleet is rigorously maintained, fully sanitized, and driven by licensed, route-experienced professionals who prioritize your well-being. We understand the value of your time, which is why punctuality is at the core of our operations. With no hidden charges and a straightforward per-kilometer rate, what you see is what you pay.
        </p>
      </div>

      <TrustStrip />
    </div>
  );
};

export default TrustPage;
