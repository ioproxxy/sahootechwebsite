
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-dark">About Sahoo Technologies</h2>
            <p className="text-gray-600">
              Founded in Kenya, Sahoo Technologies Limited is a full-service IT solutions provider dedicated to helping businesses thrive in the digital age. Our mission is to deliver innovative, reliable, and secure technology solutions that drive growth and efficiency.
            </p>
            <p className="text-gray-600">
              Our team of certified experts is passionate about technology and committed to client success. We believe in building long-term partnerships based on trust, expertise, and a deep understanding of our clients' unique challenges and goals.
            </p>
            <div className="mt-6 p-4 bg-accent rounded-lg border-l-4 border-primary">
                <p className="text-lg font-semibold text-dark">
                    "Trusted by Businesses Across Africa"
                </p>
            </div>
          </div>
          <div>
            <img 
              src="https://picsum.photos/seed/office/800/600" 
              alt="Modern office environment" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
