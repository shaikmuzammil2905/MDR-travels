import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import logo from '../assets/logo-official.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'services' | 'vehicles' | 'packages' | null
  const [mobileExpanded, setMobileExpanded] = useState(null); // 'services' | 'vehicles' | 'packages' | null
  const location = useLocation();
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
    setMobileExpanded(null);
  }, [location.pathname]);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const toggleMobileSubmenu = (key) => {
    setMobileExpanded((prev) => (prev === key ? null : key));
  };

  const servicesList = [
    { title: "Local City Travel", path: "/services/local-city-travel" },
    { title: "Airport Transfers", path: "/services/airport-transfer" },
    { title: "Outstation Travel", path: "/services/outstation-travel" },
    { title: "Family Trips", path: "/services/family-trips" },
    { title: "Pilgrimage Travel", path: "/services/pilgrimage-travel" },
    { title: "Group Tours", path: "/services/group-tours" }
  ];

  const vehiclesList = [
    { title: "4-Seater Cars", path: "/vehicles/4-seater-cars" },
    { title: "6-7 Seater SUVs", path: "/vehicles/suvs" },
    { title: "Tempo Travellers", path: "/vehicles/tempo-travellers" }
  ];

  const packagesList = [
    { title: "Vizag One Day Tour", path: "/packages/vizag-one-day" },
    { title: "Vizag 2 Days Tour", path: "/packages/vizag-two-days" },
    { title: "Araku One Day Tour", path: "/packages/araku-one-day" },
    { title: "Araku 2 Days Tour", path: "/packages/araku-two-days" },
    { title: "Araku & Lambasingi Tour", path: "/packages/araku-lambasingi" },
    { title: "Vizag Local Temple Tour", path: "/packages/vizag-local-temples" },
    { title: "Arasavilli – Sri Kurmam – Srimukhalingam", path: "/packages/arasavilli-sri-kurmam-srimukhalingam" },
    { title: "Anakapalli – Annavaram – Pitapuram – Samarlakota", path: "/packages/anakapalli-annavaram-pitapuram-samarlakota" },
    { title: "Vadapalli Venkateswara Swamy Tour", path: "/packages/vadapalli-temple" },
    { title: "Pancharama Temples Tour", path: "/packages/pancharama-temples" }
  ];

  const isServicesActive = location.pathname === '/services';
  const isVehiclesActive = location.pathname === '/vehicles';
  const isPackagesActive = location.pathname === '/packages';

  return (
    <nav ref={navRef} className={`navbar ${isScrolled || location.pathname !== '/' ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="MDR Travels Logo" className="navbar-logo-img" />
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
          <div className="nav-item-dropdown">
            <button 
              type="button"
              className={`nav-dropdown-trigger ${isServicesActive || openDropdown === 'services' ? 'active' : ''}`}
              onClick={() => toggleDropdown('services')}
              aria-expanded={openDropdown === 'services'}
            >
              <span>Services</span>
              <ChevronDown 
                size={16} 
                style={{ 
                  transition: 'transform 0.25s ease', 
                  transform: openDropdown === 'services' ? 'rotate(180deg)' : 'none' 
                }} 
              />
            </button>
            {openDropdown === 'services' && (
              <div className="nav-dropdown-menu">
                <Link 
                  to="/services" 
                  className="nav-dropdown-header-link"
                  onClick={() => setOpenDropdown(null)}
                >
                  All Services Overview →
                </Link>
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
          <div className="nav-item-dropdown">
            <button 
              type="button"
              className={`nav-dropdown-trigger ${isVehiclesActive || openDropdown === 'vehicles' ? 'active' : ''}`}
              onClick={() => toggleDropdown('vehicles')}
              aria-expanded={openDropdown === 'vehicles'}
            >
              <span>Vehicles</span>
              <ChevronDown 
                size={16} 
                style={{ 
                  transition: 'transform 0.25s ease', 
                  transform: openDropdown === 'vehicles' ? 'rotate(180deg)' : 'none' 
                }} 
              />
            </button>
            {openDropdown === 'vehicles' && (
              <div className="nav-dropdown-menu">
                <Link 
                  to="/vehicles" 
                  className="nav-dropdown-header-link"
                  onClick={() => setOpenDropdown(null)}
                >
                  All Fleet & Pricing →
                </Link>
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
          <div className="nav-item-dropdown">
            <button 
              type="button"
              className={`nav-dropdown-trigger ${isPackagesActive || openDropdown === 'packages' ? 'active' : ''}`}
              onClick={() => toggleDropdown('packages')}
              aria-expanded={openDropdown === 'packages'}
            >
              <span>Packages</span>
              <ChevronDown 
                size={16} 
                style={{ 
                  transition: 'transform 0.25s ease', 
                  transform: openDropdown === 'packages' ? 'rotate(180deg)' : 'none' 
                }} 
              />
            </button>
            {openDropdown === 'packages' && (
              <div className="nav-dropdown-menu">
                <Link 
                  to="/packages" 
                  className="nav-dropdown-header-link"
                  onClick={() => setOpenDropdown(null)}
                >
                  All Tour Packages →
                </Link>
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

          <Link 
            to="/trust" 
            className={`nav-link ${location.pathname === '/trust' ? 'active' : ''}`}
          >
            Why Trust Us
          </Link>

          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>

        <div className="nav-actions">
          <a href="tel:8247096395" className="btn btn-outline nav-call-btn">
            <Phone size={18} />
            <span>Call Now</span>
          </a>
          <a 
            href="https://wa.me/918247096395" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp nav-wa-btn"
          >
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
        <div className="mobile-menu-drawer">
          <Link 
            to="/" 
            className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Services Submenu */}
          <div className="mobile-dropdown-group">
            <div 
              className={`mobile-dropdown-header ${isServicesActive || mobileExpanded === 'services' ? 'active' : ''}`}
              onClick={() => toggleMobileSubmenu('services')}
            >
              <span>Services</span>
              <ChevronDown 
                size={18} 
                style={{ 
                  transform: mobileExpanded === 'services' ? 'rotate(180deg)' : 'none', 
                  transition: 'transform 0.2s ease' 
                }} 
              />
            </div>
            {mobileExpanded === 'services' && (
              <div className="mobile-submenu-body">
                <Link 
                  to="/services" 
                  className="mobile-submenu-all-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View All Services →
                </Link>
                {servicesList.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={item.path} 
                    className="mobile-submenu-item"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    • {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Vehicles Submenu */}
          <div className="mobile-dropdown-group">
            <div 
              className={`mobile-dropdown-header ${isVehiclesActive || mobileExpanded === 'vehicles' ? 'active' : ''}`}
              onClick={() => toggleMobileSubmenu('vehicles')}
            >
              <span>Vehicles</span>
              <ChevronDown 
                size={18} 
                style={{ 
                  transform: mobileExpanded === 'vehicles' ? 'rotate(180deg)' : 'none', 
                  transition: 'transform 0.2s ease' 
                }} 
              />
            </div>
            {mobileExpanded === 'vehicles' && (
              <div className="mobile-submenu-body">
                <Link 
                  to="/vehicles" 
                  className="mobile-submenu-all-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View All Vehicles →
                </Link>
                {vehiclesList.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={item.path} 
                    className="mobile-submenu-item"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    • {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Packages Submenu */}
          <div className="mobile-dropdown-group">
            <div 
              className={`mobile-dropdown-header ${isPackagesActive || mobileExpanded === 'packages' ? 'active' : ''}`}
              onClick={() => toggleMobileSubmenu('packages')}
            >
              <span>Packages</span>
              <ChevronDown 
                size={18} 
                style={{ 
                  transform: mobileExpanded === 'packages' ? 'rotate(180deg)' : 'none', 
                  transition: 'transform 0.2s ease' 
                }} 
              />
            </div>
            {mobileExpanded === 'packages' && (
              <div className="mobile-submenu-body">
                <Link 
                  to="/packages" 
                  className="mobile-submenu-all-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View All Packages →
                </Link>
                {packagesList.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to={item.path} 
                    className="mobile-submenu-item"
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
            className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          <Link 
            to="/trust" 
            className={`mobile-nav-link ${location.pathname === '/trust' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Why Trust Us
          </Link>

          <Link 
            to="/contact" 
            className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <div className="mobile-actions-wrapper">
            <a href="tel:8247096395" className="btn btn-outline" style={{ justifyContent: 'center' }}>
              <Phone size={18} />
              <span>Call Now</span>
            </a>
            <a href="https://wa.me/918247096395" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ justifyContent: 'center' }}>
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
