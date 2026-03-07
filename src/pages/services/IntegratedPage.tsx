import ServiceTemplate from '../../components/ServiceTemplate';
import { galleryImages } from '../../assets/data';

const IntegratedPage = () => {
  return (
    <ServiceTemplate
      title="Integrated"
      tagline="Multi-channel campaign execution and cross-platform coordination."
      image={galleryImages[3]}
      description="The best campaigns don't live in silos. We design integrated programs that create a cohesive brand experience across OOH, digital, social, experiential, and PR. By synchronizing every touchpoint, we amplify your message and maximize total campaign impact."
      deliverables={['360° Campaign Execution', 'Media Buying Alignment', 'PR & Communications Integration', 'OOH & Experiential Design', 'Asset Localization']}
    />
  );
};

export default IntegratedPage;
