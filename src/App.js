import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import ProjectSection from './components/Projects/ProjectSection';
// import Project from './components/Projects/Projects';
// import PorjectSection from './components/Projects/ProjectSection';
import Skills from './components/Skills/Skills';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/> } />
      </Routes>
      <Footer />
      </div>
      );
    }
    
    export default App;
    // <Routes>
    //   <Route path='/' element={<HomePage/>} />
    // </Routes>
