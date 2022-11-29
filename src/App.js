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
      <Project />
    </div>
  );
}

export default App;
