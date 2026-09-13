import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import FleetPricing from './components/FleetPricing';
import TourPackages from './components/TourPackages';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <FleetPricing />
        <TourPackages />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/918247096395" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
}

export default App;
