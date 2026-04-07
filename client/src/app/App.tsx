import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Experience } from '../sections/Experience';
import { Research } from '../sections/Research';
import { Education } from '../sections/Education';
import { Achievements } from '../sections/Achievements';
import { Contact } from '../sections/Contact';
import { usePortfolioStore } from '../store/portfolioStore';

export default function App() {
  const { fetchPortfolioData } = usePortfolioStore();

  useEffect(() => {
    fetchPortfolioData();
  }, [fetchPortfolioData]);
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="research">
        <Research />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}