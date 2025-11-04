
import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold">Sahoo Technologies</h3>
                        <p className="mt-4 text-gray-400 max-w-md">
                            Your dedicated partner for intelligent and secure IT solutions, empowering businesses across Africa to achieve digital excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="mt-4 space-y-2">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-semibold">Connect With Us</h4>
                         <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-facebook-f"></i></a>
                         </div>
                    </div>
                </div>
                
                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Sahoo Technologies Limited. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
