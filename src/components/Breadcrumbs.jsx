import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: '#64748b', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', color: 'var(--primary-blue)', textDecoration: 'none' }}>
          <Home size={16} style={{ marginRight: '0.25rem' }} /> Home
        </Link>
        
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const formattedValue = value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

          return (
            <React.Fragment key={to}>
              <ChevronRight size={16} />
              {isLast ? (
                <span style={{ color: 'var(--dark-blue)', fontWeight: 600 }}>
                  {formattedValue}
                </span>
              ) : (
                <Link to={to} style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>
                  {formattedValue}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
