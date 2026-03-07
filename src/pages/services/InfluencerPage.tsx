import ServiceTemplate from '../../components/ServiceTemplate';
import { galleryImages } from '../../assets/data';

const InfluencerPage = () => {
  return (
    <ServiceTemplate
      title="Talent"
      tagline="Influencer matching, contract management, and UGC."
      image={galleryImages[1]}
      description="Authentic voices drive modern culture. We manage end-to-end influencer partnerships, from identifying the exact right talent for your brand to handling complex contract negotiations. We ensure that creator-led content feels organic to their audience while hitting your brand's strict quality standards."
      deliverables={['Talent Identification & Casting', 'Contract Negotiation', 'Briefing & Creative Reviews', 'UGC Sourcing', 'Whitelisting & Paid Amplification']}
    />
  );
};

export default InfluencerPage;
