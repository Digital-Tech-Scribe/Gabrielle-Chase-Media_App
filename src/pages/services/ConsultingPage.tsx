import ServiceTemplate from '../../components/ServiceTemplate';
import { galleryImages } from '../../assets/data';

const ConsultingPage = () => {
  return (
    <ServiceTemplate
      title="Consulting"
      tagline="1:1 brand consulting, creative audits, and advisory."
      image={galleryImages[4]}
      description="For brands with internal teams looking for external perspective. Gabrielle Chase Media offers executive-level creative consulting to audit your current output, refine your operational workflows, and align your internal teams around a cohesive, premium vision."
      deliverables={['Creative Audits', 'Brand Playbooks', 'Executive Advisory', 'Internal Team Workshops', 'Production Workflow Optimization']}
    />
  );
};

export default ConsultingPage;
