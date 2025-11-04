
import React from 'react';
import Button from './common/Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-accent min-h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/seed/network/1920/1080')"}}></div>
       <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/80 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark mb-4 leading-tight">
          Empowering Digital Innovation Through 
          <span className="block text-primary">Intelligence and Security.</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-8">
          Sahoo Technologies Limited is your trusted partner in navigating the complexities of the digital world. We provide cutting-edge IT solutions to businesses across Africa.
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Button as="a" href="#contact" variant="primary" className="text-lg">Let's Talk Tech</Button>
          <Button as="a" href="#services" variant="outline" className="text-lg">Our Services</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
