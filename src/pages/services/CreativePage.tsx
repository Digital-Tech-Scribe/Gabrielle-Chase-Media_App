import ServiceTemplate from '../../components/ServiceTemplate';
import { galleryImages } from '../../assets/data';

const CreativePage = () => {
  return (
    <ServiceTemplate
      title="Creative"
      tagline="Art direction, photography, and editorial campaigns."
      image={galleryImages[0]}
      description="We craft visually stunning narratives that elevate brand perception. From high-fashion lookbooks to striking product photography, our creative production operates at the highest editorial standards. We don't just take pictures; we build worlds that audiences want to live in."
      deliverables={['Art Direction', 'Photography (Editorial & E-Comm)', 'Video Production', 'Visual Identity Design', 'Campaign Conceptualization']}
    />
  );
};

export default CreativePage;
