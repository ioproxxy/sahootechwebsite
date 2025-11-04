
import React, { useState } from 'react';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Chat Window */}
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="w-80 h-96 bg-white rounded-lg shadow-2xl flex flex-col">
                    <header className="bg-primary text-white p-4 rounded-t-lg">
                        <h3 className="font-semibold">SahooTech Assistant</h3>
                        <p className="text-sm opacity-80">How can we help you today?</p>
                    </header>
                    <main className="flex-grow p-4 overflow-y-auto bg-accent">
                        <div className="bg-white p-3 rounded-lg shadow-sm self-start max-w-xs">
                            <p className="text-sm">Hello! Ask me anything about our services, or let me know how I can assist you.</p>
                        </div>
                    </main>
                    <footer className="p-2 border-t">
                        <div className="flex items-center">
                            <input type="text" placeholder="Type your message..." className="w-full px-3 py-2 border-silver rounded-full focus:outline-none focus:ring-2 focus:ring-primary" />
                            <button className="ml-2 text-primary hover:text-secondary p-2 rounded-full">
                                <i className="fas fa-paper-plane fa-lg"></i>
                            </button>
                        </div>
                    </footer>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mt-4 ml-auto flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full shadow-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transform transition-all duration-300 hover:scale-110"
                aria-label="Toggle Chat"
            >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'} fa-2x transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}></i>
            </button>
        </div>
    );
};

export default Chatbot;
