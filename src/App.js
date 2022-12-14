import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import AboutPage from './pages/About/AboutPage';
import LoadingScreen from './components/animation/LoadingScreen';
import ThemeButton from './components/Theme/ThemeButton';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="bg-whitish dark:bg-greenish">
      {loading === true ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <ThemeButton />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
