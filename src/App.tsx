import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import CampaignsPage from './pages/work/CampaignsPage';
import ClientsPage from './pages/work/ClientsPage';
import RecognitionPage from './pages/work/RecognitionPage';
import PressPage from './pages/work/PressPage';
import CaseStudiesPage from './pages/work/CaseStudiesPage';

import ServicesPage from './pages/ServicesPage';
import CreativePage from './pages/services/CreativePage';
import MediaPage from './pages/services/MediaPage';
import StrategyPage from './pages/services/StrategyPage';
import IntegratedPage from './pages/services/IntegratedPage';
import ConsultingPage from './pages/services/ConsultingPage';
import CommercePage from './pages/services/CommercePage';
import InfluencerPage from './pages/services/InfluencerPage';
import AnalyticsPage from './pages/services/AnalyticsPage';

import AboutPage from './pages/AboutPage';
import BlogPage from './pages/about/BlogPage';
import ResearchPage from './pages/about/ResearchPage';
import BioPage from './pages/about/BioPage';

import ConnectPage from './pages/ConnectPage';
import ContactUsPage from './pages/connect/ContactUsPage';
import LeadershipPage from './pages/connect/LeadershipPage';
import EventsPage from './pages/connect/EventsPage';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <div className="app-container">
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navigation />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />

              <Route path="/work" element={<WorkPage />} />
              <Route path="/work/campaigns" element={<CampaignsPage />} />
              <Route path="/work/clients" element={<ClientsPage />} />
              <Route path="/work/recognition" element={<RecognitionPage />} />
              <Route path="/work/press" element={<PressPage />} />
              <Route path="/work/case-studies" element={<CaseStudiesPage />} />

              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/creative" element={<CreativePage />} />
              <Route path="/services/media" element={<MediaPage />} />
              <Route path="/services/strategy" element={<StrategyPage />} />
              <Route path="/services/integrated" element={<IntegratedPage />} />
              <Route path="/services/consulting" element={<ConsultingPage />} />
              <Route path="/services/commerce" element={<CommercePage />} />
              <Route path="/services/influencer" element={<InfluencerPage />} />
              <Route path="/services/analytics" element={<AnalyticsPage />} />

              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/blog" element={<BlogPage />} />
              <Route path="/about/research" element={<ResearchPage />} />
              <Route path="/about/bio" element={<BioPage />} />

              <Route path="/connect" element={<ConnectPage />} />
              <Route path="/connect/contact" element={<ContactUsPage />} />
              <Route path="/connect/leadership" element={<LeadershipPage />} />
              <Route path="/connect/events" element={<EventsPage />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
