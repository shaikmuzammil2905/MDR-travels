import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const RelatedContent = ({ links }) => {
  if (!links || links.length === 0) return null;

  return (
    <section className="section" style={{ background: 'var(--light-bg)', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        <h3 style={{ fontSize: '1.5rem', color: 'var(--dark-blue)', marginBottom: '1.5rem', fontWeight: 700 }}>
          Related Links
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {links.map((link, idx) => (
            <Link 
              key={idx} 
              to={link.path} 
              style={{ 
                background: '#fff', 
                padding: '1rem 1.5rem', 
                borderRadius: '12px', 
                textDecoration: 'none', 
                color: 'var(--dark-blue)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-blue)';
                e.currentTarget.style.color = 'var(--primary-blue)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.color = 'var(--dark-blue)';
              }}
            >
              {link.title} <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;
