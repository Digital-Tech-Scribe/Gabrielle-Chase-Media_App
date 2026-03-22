import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Global Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';

// New Architecture Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import FilmTVPage from './pages/FilmTVPage';
import StyleMagnate from './pages/StyleMagnate';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      <CustomCursor />
      
      {loading ? (
        <Loader onComplete={handleLoadingComplete} />
      ) : (
        <div className="app-container">
          <Navigation />
          
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Primary Pages */}
              <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
              <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
              <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
              <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
              
              {/* Specialized Pages */}
              <Route path="/film-tv" element={<PageTransition><FilmTVPage /></PageTransition>} />
              <Route path="/style-magnate" element={<PageTransition><StyleMagnate /></PageTransition>} />
              
              {/* Utility Pages */}
              <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
              
              {/* Catch-all redirect to Home */}
              <Route path="*" element={<PageTransition><HomePage /></PageTransition>} />
            </Routes>
          </AnimatePresence>
          
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
