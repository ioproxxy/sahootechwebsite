
import React, { useState } from 'react';
import Button from './common/Button';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-dark">Get in Touch</h2>
                    <p className="mt-4 text-lg text-gray-600">Have a project in mind or just want to say hello? We'd love to hear from you.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-accent p-8 rounded-lg">
                        <h3 className="text-2xl font-semibold text-dark mb-6">Contact Information</h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt text-primary w-6 mt-1"></i>
                                <span>123 Tech Avenue, Nairobi, Kenya</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope text-primary w-6"></i>
                                <a href="mailto:info@sahootechnologies.com" className="hover:text-primary">info@sahootechnologies.com</a>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone text-primary w-6"></i>
                                <a href="tel:+254700123456" className="hover:text-primary">+254 700 123 456</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input type="text" name="name" id="name" placeholder="Your Name" required className="w-full px-4 py-3 rounded-md border border-silver focus:outline-none focus:ring-2 focus:ring-primary" value={formData.name} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-md border border-silver focus:outline-none focus:ring-2 focus:ring-primary" value={formData.email} onChange={handleChange} />
                            </div>
                             <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea name="message" id="message" placeholder="Your Message" rows={5} required className="w-full px-4 py-3 rounded-md border border-silver focus:outline-none focus:ring-2 focus:ring-primary" value={formData.message} onChange={handleChange}></textarea>
                            </div>
                            <div>
                                <Button type="submit" variant="primary" className="w-full">Send Message</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
