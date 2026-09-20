import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:w-1/2 flex justify-center order-2 md:order-1"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-64 h-64 md:w-80 md:h-80"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-purple-500 to-blue-400 blur-lg opacity-70"
                            />

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-accent"
                            />

                            <div className="absolute inset-1.5 md:inset-2 rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl z-10 shadow-[0_0_60px_rgba(59,130,246,0.2)]">
                                <img
                                    src="/pavan.jpeg"
                                    alt="Pavan Kumar K"
                                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-500 opacity-90"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="md:w-1/2 text-center md:text-left order-1 md:order-2"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 mb-6 backdrop-blur-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            Available for opportunities
                        </div>

                        <h2 className="text-slate-400 font-medium text-xl mb-2 tracking-wide">
                            Hi, I&apos;m
                        </h2>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="hero-name text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight"
                        >
                            Pavan Kumar K
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            className="text-2xl md:text-3xl font-semibold text-slate-300 mb-8"
                        >
                            I build{' '}
                            <span className="text-gradient">
                                <TypeAnimation
                                    sequence={[
                                        'Software Experiences',
                                        2000,
                                        'Web Applications',
                                        2000,
                                        'React Interfaces',
                                        2000,
                                        'AI-Driven Solutions',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </span>
                        </motion.div>
                        <div className="text-slate-300 mb-8 max-w-lg mx-auto md:mx-0 space-y-4">
                            <p className="text-lg md:text-xl font-medium text-white leading-snug">
                                Building scalable digital products with thoughtful design and clean engineering.
                            </p>
                            <p className="text-base md:text-lg leading-relaxed">
                                I specialize in creating seamless web experiences and impactful software products that blend <span className="text-blue-400 font-medium">modern front-end development</span> with smart, AI-aware problem solving.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="px-8 py-3 bg-white/5 backdrop-blur-md border border-white/20 text-white font-medium rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:bg-white/10 hover:border-white/30 transition-all duration-300 w-full sm:w-auto text-center"
                            >
                                View Projects
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/Pavan_Kumar_k_Resume.pdf"
                                download
                                className="px-8 py-3 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-white font-medium rounded-full hover:bg-blue-500/40 hover:border-blue-500/50 shadow-[0_4px_20px_rgba(59,130,246,0.3)] transition-all duration-300 w-full sm:w-auto text-center"
                            >
                                Download Resume
                            </motion.a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
