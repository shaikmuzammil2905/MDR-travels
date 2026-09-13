import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import logo from '../assets/image.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`navbar ${isScrolled || location.pathname !== '/' ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="MDR Travels Logo" style={{ height: '50px', objectFit: 'contain' }} />
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <a href="tel:8247096395" className="btn btn-outline">
            <Phone size={18} />
            <span>Call Now</span>
          </a>
          <a href="https://wa.me/918247096395" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: 'white',
          padding: '1rem',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              style={{
                padding: '0.5rem',
                borderBottom: '1px solid #eee',
                fontWeight: 500,
                color: location.pathname === link.path ? 'var(--primary-red)' : 'var(--dark-blue)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:8247096395" className="btn btn-primary" style={{justifyContent: 'center', marginTop: '0.5rem'}}>
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
