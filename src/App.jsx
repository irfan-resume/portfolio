import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import AiWorkflow from './sections/AiWorkflow';
import Education from './sections/Education';
import Principles from './sections/Principles';
import Contact from './sections/Contact';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AiWorkflow />
        <Education />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
