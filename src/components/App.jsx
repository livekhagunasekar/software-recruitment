import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage'; // or whatever your main component is

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      {loaded && <HomePage />}
    </>
  );
};

export default App;
