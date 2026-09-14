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
      <TrustStrip />
    </div>
  );
};

export default TrustPage;
