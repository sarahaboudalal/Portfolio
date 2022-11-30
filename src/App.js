import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
