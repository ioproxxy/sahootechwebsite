
import React from 'react';
import Card from './common/Card';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark">Our Core Services</h2>
          <p className="mt-4 text-lg text-gray-600">We offer a comprehensive suite of IT services to meet your business needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <Card key={index} className="text-center">
              {service.icon}
              <h3 className="text-xl font-semibold text-dark mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
