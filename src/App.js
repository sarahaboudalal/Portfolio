import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import SkillsPage from './pages/Skills/SkillsPage';
import AboutPage from './pages/About/AboutPage';
import LoadingScreen from './components/animation/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading && <LoadingScreen />}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
