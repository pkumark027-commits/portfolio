import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-white/5 backdrop-blur-lg border-t border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    <div className="text-slate-400 text-sm">
                        © 2026 Pavan kumar k. All rights reserved.
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/pkumark027-commits" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                            <span className="sr-only">GitHub</span>
                            <FiGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/pavan-kumar-k-bb6983267/" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                            <span className="sr-only">LinkedIn</span>
                            <FiLinkedin size={20} />
                        </a>
                        <a href="mailto:pkumark027@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                            <span className="sr-only">Email</span>
                            <FiMail size={20} />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
