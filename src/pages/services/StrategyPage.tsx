import ServiceTemplate from '../../components/ServiceTemplate';
import { galleryImages } from '../../assets/data';

const StrategyPage = () => {
  return (
    <ServiceTemplate
      title="Strategy"
      tagline="Brand positioning, audience insights, and market research."
      image={galleryImages[2]}
      description="Beautiful visuals must be backed by sharp insights. Our strategy practice defines your brand's unique space in the market. We analyze cultural trends, audience behavior, and competitive landscapes to build a roadmap that ensures your creative investments drive measurable business growth."
      deliverables={['Brand Positioning', 'Audience Personas', 'Go-To-Market Plans', 'Cultural Trend Reporting', 'Campaign Architecture']}
    />
  );
};

export default StrategyPage;
