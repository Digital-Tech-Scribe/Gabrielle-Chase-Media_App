import ServiceTemplate from '../../components/ServiceTemplate';
import { galleryImages } from '../../assets/data';

const CommercePage = () => {
  return (
    <ServiceTemplate
      title="Commerce"
      tagline="Product photography, e-commerce campaigns, and shoppable content."
      image={galleryImages[0]}
      description="Bridging the gap between desire and conversion. We produce commerce-first creative that lives natively on Shopify, Instagram Checkout, and TikTok Shop. Our assets are explicitly designed to remove friction, build trust, and drive direct sales without sacrificing premium aesthetics."
      deliverables={['Product Photography (PDP)', 'Shoppable Video Graphics', 'E-Comm UX Ad Assets', 'Conversion Rate Optimization Content', 'Lifestyle Lookbooks']}
    />
  );
};

export default CommercePage;
