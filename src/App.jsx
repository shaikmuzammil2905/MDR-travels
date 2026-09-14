import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustPage from './components/TrustPage';
import ContactPage from './components/ContactPage';
import ContactSection from './components/ContactSection';
import Services from './components/Services';
import VehiclesSection from './components/VehiclesSection';
import TourPackages from './components/TourPackages';
import DestinationsSection from './components/DestinationsSection';
import TravelProcessSection from './components/TravelProcessSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import AboutSection from './components/AboutSection';
import { MessageCircle } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [children]);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
        {children}
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
};

const Home = () => (
  <Layout>
    <div style={{ marginTop: '-80px' }}><Hero /></div>
    <div className="container booking-container">
      <BookingForm />
    </div>
    <AboutSection isHomePage={true} />
    <TrustPage isHomePage={true} />
    <VehiclesSection isHomePage={true} />
    <TourPackages isHomePage={true} />
    <DestinationsSection />
    <TravelProcessSection />
    <FAQSection />
    <ContactSection />
  </Layout>
);

const ServicesPage = () => (
  <Layout>
    <Services />
  </Layout>
);

const VehiclesPage = () => (
  <Layout>
    <VehiclesSection />
  </Layout>
);

const PackagesPage = () => (
  <Layout>
    <TourPackages />
  </Layout>
);

const AboutPage = () => (
  <Layout>
    <AboutSection />
  </Layout>
);

const Trust = () => (
  <Layout>
    <TrustPage />
  </Layout>
);

const Contact = () => (
  <Layout>
    <ContactPage />
  </Layout>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
