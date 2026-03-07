import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import ArtDirScroll from './components/ArtDirScroll';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app-container">
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Navigation />
          <main>
            <ArtDirScroll />
          </main>
        </motion.div>
      )}
    </div>
  );
}

export default App;
