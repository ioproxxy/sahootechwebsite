
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="bg-light text-dark font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
