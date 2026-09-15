import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustPage from './components/TrustPage';
import ContactPage from './components/ContactPage';
import ContactSection from './components/ContactSection';
import Services from './components/Services';
import VehicleCategories from './components/VehicleCategories';
import TourPackages from './components/TourPackages';
import DestinationsSection from './components/DestinationsSection';
import TravelProcessSection from './components/TravelProcessSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import AboutSection from './components/AboutSection';
import { MessageCircle, Phone } from 'lucide-react';
import VehicleCategoryPage from './pages/VehicleCategoryPage';
import TourDetailPage from './pages/TourDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import DestinationDetailPage from './pages/DestinationDetailPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disable: 'mobile' // Disable advanced animations on mobile to prevent overflow/layout shifts, or use 'phone'
    });
    
    // Fallback: remove 'reveal' logic, just refresh AOS if children change
    AOS.refresh();
  }, [children]);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
        {children}
      </main>
      <Footer />
      {/* Floating Call Button */}
      <a 
        href="tel:+918247096395" 
        className="call-float"
        aria-label="Call Now"
      >
        <Phone size={32} />
      </a>
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
    <VehicleCategories isHomePage={true} />
    <TourPackages isHomePage={true} />
    <AboutSection isHomePage={true} />
    <TrustPage isHomePage={true} />
    <DestinationsSection />
    <TravelProcessSection />
    <ContactPage isHomePage={true} />
  </Layout>
);

const ServicesPage = () => (
  <Layout>
    <Services />
  </Layout>
);

const VehiclesPage = () => (
  <Layout>
    <VehicleCategories />
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
        <Route path="/services/:serviceId" element={<Layout><ServiceDetailPage /></Layout>} />
        
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/vehicles/:categoryId" element={<Layout><VehicleCategoryPage /></Layout>} />
        
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/packages/:tourId" element={<Layout><TourDetailPage /></Layout>} />
        
        <Route path="/destinations/:destId" element={<Layout><DestinationDetailPage /></Layout>} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
