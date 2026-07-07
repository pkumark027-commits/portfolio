import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="font-sans text-slate-200 bg-[#0f172a] min-h-screen relative selection:bg-blue-500/30 selection:text-white">
            {/* Animated Gradient Background */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none gradient-bg">
                {/* Optional subtle dark overlay to make it softer for content */}
                <div className="absolute inset-0 bg-[#0f172a]/40 backdrop-blur-[20px]"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 overflow-x-hidden">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
