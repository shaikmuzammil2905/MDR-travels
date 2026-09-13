import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import logo from '../assets/image.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'services' | 'vehicles' | 'packages' | null
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

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

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileSubmenu = (key) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const servicesList = [
    { title: "Local Car Rentals", path: "/services" },
    { title: "Outstation Taxi Service", path: "/services" },
    { title: "Araku Tour Packages", path: "/services" },
    { title: "Airport Pickup & Drop", path: "/services" },
    { title: "Railway Station Pickup & Drop", path: "/services" }
  ];

  const vehiclesList = [
    { title: "Sedan (4 Seater) - Dzire / Etios", path: "/vehicles" },
    { title: "SUV (6-7 Seater) - Innova / Ertiga", path: "/vehicles" },
    { title: "Tempo Traveller (12-14 Seater)", path: "/vehicles" }
  ];

  const packagesList = [
    { title: "Araku Valley One Day Tour", path: "/packages" },
    { title: "Lambasingi Hills Tour", path: "/packages" },
    { title: "Vizag City Sightseeing", path: "/packages" }
  ];

  const isServicesActive = location.pathname === '/services';
  const isVehiclesActive = location.pathname === '/vehicles';
  const isPackagesActive = location.pathname === '/packages';

  return (
    <nav ref={navRef} className={`navbar ${isScrolled || location.pathname !== '/' ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="MDR Travels Logo" style={{ height: '50px', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div 
            className="nav-item-dropdown"
            onMouseEnter={() => setOpenDropdown('services')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              className={`nav-dropdown-trigger ${isServicesActive || openDropdown === 'services' ? 'active' : ''}`}
              onClick={() => {
                if (openDropdown === 'services') {
                  navigate('/services');
                  setOpenDropdown(null);
                } else {
                  setOpenDropdown('services');
                }
              }}
            >
              <span>Services</span>
              <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: openDropdown === 'services' ? 'rotate(180deg)' : 'none' }} />
            </button>
            {openDropdown === 'services' && (
              <div className="nav-dropdown-menu">
                {servicesList.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={item.path} 
                    className={`nav-dropdown-item ${isServicesActive ? 'active' : ''}`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    <span className="dot"></span>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Vehicles Dropdown */}
          <div 
            className="nav-item-dropdown"
            onMouseEnter={() => setOpenDropdown('vehicles')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              className={`nav-dropdown-trigger ${isVehiclesActive || openDropdown === 'vehicles' ? 'active' : ''}`}
              onClick={() => {
                if (openDropdown === 'vehicles') {
                  navigate('/vehicles');
                  setOpenDropdown(null);
                } else {
                  setOpenDropdown('vehicles');
                }
              }}
            >
              <span>Vehicles</span>
              <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: openDropdown === 'vehicles' ? 'rotate(180deg)' : 'none' }} />
            </button>
            {openDropdown === 'vehicles' && (
              <div className="nav-dropdown-menu">
                {vehiclesList.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={item.path} 
                    className={`nav-dropdown-item ${isVehiclesActive ? 'active' : ''}`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    <span className="dot"></span>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Packages Dropdown */}
          <div 
            className="nav-item-dropdown"
            onMouseEnter={() => setOpenDropdown('packages')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              className={`nav-dropdown-trigger ${isPackagesActive || openDropdown === 'packages' ? 'active' : ''}`}
              onClick={() => {
                if (openDropdown === 'packages') {
                  navigate('/packages');
                  setOpenDropdown(null);
                } else {
                  setOpenDropdown('packages');
                }
              }}
            >
              <span>Packages</span>
              <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: openDropdown === 'packages' ? 'rotate(180deg)' : 'none' }} />
            </button>
            {openDropdown === 'packages' && (
              <div className="nav-dropdown-menu">
                {packagesList.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={item.path} 
                    className={`nav-dropdown-item ${isPackagesActive ? 'active' : ''}`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    <span className="dot"></span>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
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
          aria-label="Toggle navigation menu"
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
          padding: '1.25rem',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          maxHeight: '80vh',
          overflowY: 'auto'
        }}>
          <Link 
            to="/" 
            style={{
              padding: '0.6rem 0.5rem',
              borderBottom: '1px solid #eee',
              fontWeight: 600,
              color: location.pathname === '/' ? 'var(--primary-red)' : 'var(--dark-blue)'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Services Submenu */}
          <div>
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.6rem 0.5rem',
                borderBottom: '1px solid #eee',
                fontWeight: 600,
                color: isServicesActive ? 'var(--primary-red)' : 'var(--dark-blue)',
                cursor: 'pointer'
              }}
              onClick={() => toggleMobileSubmenu('services')}
            >
              <span>Services</span>
              <ChevronDown size={18} style={{ transform: mobileExpanded.services ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </div>
            {mobileExpanded.services && (
              <div style={{ paddingLeft: '1rem', background: '#fcfcfc', borderBottom: '1px solid #eee' }}>
                <Link 
                  to="/services" 
                  style={{ display: 'block', padding: '0.5rem 0', color: 'var(--primary-red)', fontWeight: 600 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View All Services →
                </Link>
                {servicesList.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={item.path} 
                    style={{ display: 'block', padding: '0.4rem 0', color: '#555', fontSize: '0.95rem' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    • {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Vehicles Submenu */}
          <div>
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.6rem 0.5rem',
                borderBottom: '1px solid #eee',
                fontWeight: 600,
                color: isVehiclesActive ? 'var(--primary-red)' : 'var(--dark-blue)',
                cursor: 'pointer'
              }}
              onClick={() => toggleMobileSubmenu('vehicles')}
            >
              <span>Vehicles</span>
              <ChevronDown size={18} style={{ transform: mobileExpanded.vehicles ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </div>
            {mobileExpanded.vehicles && (
              <div style={{ paddingLeft: '1rem', background: '#fcfcfc', borderBottom: '1px solid #eee' }}>
                <Link 
                  to="/vehicles" 
                  style={{ display: 'block', padding: '0.5rem 0', color: 'var(--primary-red)', fontWeight: 600 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View All Vehicles →
                </Link>
                {vehiclesList.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={item.path} 
                    style={{ display: 'block', padding: '0.4rem 0', color: '#555', fontSize: '0.95rem' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    • {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Packages Submenu */}
          <div>
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.6rem 0.5rem',
                borderBottom: '1px solid #eee',
                fontWeight: 600,
                color: isPackagesActive ? 'var(--primary-red)' : 'var(--dark-blue)',
                cursor: 'pointer'
              }}
              onClick={() => toggleMobileSubmenu('packages')}
            >
              <span>Packages</span>
              <ChevronDown size={18} style={{ transform: mobileExpanded.packages ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </div>
            {mobileExpanded.packages && (
              <div style={{ paddingLeft: '1rem', background: '#fcfcfc', borderBottom: '1px solid #eee' }}>
                <Link 
                  to="/packages" 
                  style={{ display: 'block', padding: '0.5rem 0', color: 'var(--primary-red)', fontWeight: 600 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View All Packages →
                </Link>
                {packagesList.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={item.path} 
                    style={{ display: 'block', padding: '0.4rem 0', color: '#555', fontSize: '0.95rem' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    • {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            to="/about" 
            style={{
              padding: '0.6rem 0.5rem',
              borderBottom: '1px solid #eee',
              fontWeight: 600,
              color: location.pathname === '/about' ? 'var(--primary-red)' : 'var(--dark-blue)'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          <a href="tel:8247096395" className="btn btn-primary" style={{justifyContent: 'center', marginTop: '0.75rem'}}>
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
