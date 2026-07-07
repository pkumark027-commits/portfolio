import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = links.map(link => link.href.substring(1));
            let current = 'home';
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        handleScrollSpy();
        window.addEventListener('scroll', handleScrollSpy);
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    const handleScroll = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed w-full top-0 z-50 bg-[#0f172a]/60 backdrop-blur-xl border-b border-white/10 transition-all duration-300 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-xl font-bold text-white tracking-widest uppercase">
                            AKHILESH <span className="text-blue-500 font-normal">A M</span>
                        </a>
                    </div>

                    <div className="hidden md:flex space-x-10">
                        {links.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className={`transition-colors duration-300 text-sm font-medium tracking-wide uppercase ${
                                        isActive ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-lg border-b border-white/10 shadow-lg">
                    <div className="px-4 pt-2 pb-4 space-y-2 sm:px-6">
                        {links.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className={`block px-3 py-3 rounded-lg text-base font-medium transition-all text-center tracking-wide uppercase ${
                                        isActive ? 'text-blue-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
