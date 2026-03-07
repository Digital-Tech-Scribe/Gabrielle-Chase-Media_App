import ServiceTemplate from '../../components/ServiceTemplate';
import { galleryImages } from '../../assets/data';

const MediaPage = () => {
  return (
    <ServiceTemplate
      title="Media"
      tagline="Social media content creation and short-form video."
      image={galleryImages[1]}
      description="In a scroll-first culture, your content needs to break through the noise. We produce high-volume, premium social assets specifically optimized for TikTok, Instagram Reels, and YouTube Shorts. Our media pipeline ensures your brand stays relevant and culturally resonant."
      deliverables={['Short-Form Video Production', 'Social Media Management', 'Content Calendars', 'Community Management', 'Copywriting & Voice']}
    />
  );
};

export default MediaPage;
