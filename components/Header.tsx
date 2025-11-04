
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import Button from './common/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold text-primary">Sahoo<span className="text-dark">Tech</span></a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button as="a" href="mailto:info@sahootechnologies.com" variant="outline">
              Request Proposal
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark focus:outline-none">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} fa-lg`}></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white absolute top-full left-0 w-full shadow-lg`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium py-2">
              {link.name}
            </a>
          ))}
          <Button as="a" href="mailto:info@sahootechnologies.com" variant="primary" className="mt-4">
            Request Proposal
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
