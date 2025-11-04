
import React from 'react';
import Button from './common/Button';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-dark">Our Work in Action</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We're proud of the solutions we've delivered. Our case studies highlighting client success stories and project outcomes will be available soon.
        </p>
         <div className="mt-8">
          <Button as="a" href="#contact" variant="primary">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
