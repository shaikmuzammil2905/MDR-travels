import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedContent from '../components/RelatedContent';
import FAQSection from '../components/FAQSection';

const destinationData = {
  'visakhapatnam': { title: 'Visakhapatnam', intro: 'The City of Destiny, offering beautiful beaches, scenic hills, and deep cultural heritage.', related: [{ title: 'Visakhapatnam City Tour', path: '/packages/visakhapatnam-city-tour' }] },
  'araku-valley': { title: 'Araku Valley', intro: 'A picturesque hill station in the Eastern Ghats known for its coffee plantations, waterfalls, and tribal culture.', related: [{ title: 'Araku Valley Tour', path: '/packages/araku-valley-tour' }] },
  'lambasingi': { title: 'Lambasingi', intro: 'Often referred to as the Kashmir of Andhra Pradesh, famous for its misty mornings and cool climate.', related: [{ title: 'Araku Valley Tour', path: '/packages/araku-valley-tour' }] },
  'tirupati': { title: 'Tirupati', intro: 'The spiritual capital of Andhra Pradesh, home to the revered Sri Venkateswara Swamy Temple.', related: [{ title: 'Tirupati Temple Tour', path: '/packages/tirupati-temple-tour' }] },
  'vijayawada': { title: 'Vijayawada', intro: 'A bustling city on the banks of the Krishna River, known for the Kanaka Durga Temple and rich history.', related: [{ title: 'Vijayawada & Amaravati Tour', path: '/packages/vijayawada-amaravati-tour' }] },
  'amaravati': { title: 'Amaravati', intro: 'The ancient capital filled with Buddhist heritage and the famous Amaravati Stupa.', related: [{ title: 'Vijayawada & Amaravati Tour', path: '/packages/vijayawada-amaravati-tour' }] },
  'srisailam': { title: 'Srisailam', intro: 'A holy town nestled in the Nallamala hills, featuring one of the 12 Jyotirlingas.', related: [{ title: 'Srisailam Tour', path: '/packages/srisailam-tour' }] },
  'rajahmundry': { title: 'Rajahmundry', intro: 'The cultural capital of Andhra Pradesh, located on the scenic banks of the Godavari River.', related: [{ title: 'Multi-Destination Tour', path: '/packages/andhra-pradesh-multi-destination-tour' }] }
};

const DestinationDetailPage = () => {
  const { destId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (destId && destinationData[destId]) {
      setData(destinationData[destId]);
    } else {
      navigate('/');
    }
  }, [destId, navigate]);

  if (!data) return null;

  return (
    <div className="page-wrapper">
      <Breadcrumbs />
      
      <section className="about-hero-strip">
        <div className="container text-center">
          <h1 className="about-main-title">{data.title}</h1>
          <p className="about-main-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {data.intro}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <div style={{ background: '#fff', padding: '3rem', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">Travel to {data.title}</h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '2rem' }}>
              We offer safe, comfortable, and reliable outstation taxi services to {data.title}. Whether you're traveling solo, with family, or in a large group, we have the perfect vehicle to make your journey enjoyable.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>Enquire Now</button>
              <button className="btn btn-outline" onClick={() => navigate('/vehicles')}>View Vehicle Options</button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <RelatedContent links={data.related} />
    </div>
  );
};

export default DestinationDetailPage;
