import ServiceTemplate from '../../components/ServiceTemplate';
import { galleryImages } from '../../assets/data';

const AnalyticsPage = () => {
  return (
    <ServiceTemplate
      title="Analytics"
      tagline="Campaign performance tracking, audience analytics, and ROI reporting."
      image={galleryImages[2]}
      description="Creative intuition backed by hard data. We monitor campaign performance in real-time, delivering dashboards that translate metrics into actionable insights. We don't just report on vanity metrics; we track the user journey to prove definitive return on investment."
      deliverables={['Real-Time Performance Dashboards', 'Post-Campaign Reporting', 'A/B Creative Testing', 'Sentiment Analysis', 'Custom ROI Modeling']}
    />
  );
};

export default AnalyticsPage;
