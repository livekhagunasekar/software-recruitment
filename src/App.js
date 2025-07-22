import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientsSection from './components/ClientsSection';
import LatestJobsSection from './components/LatestJobsSection';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2500); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Navbar />

      {/* Hero section */}
      <div className="mt-20">
        <Hero />
      </div>

      {/* Clients section */}
      <ClientsSection />
      <LatestJobsSection />
      <Footer />
    </div>
  );
}

export default App;
