import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiZap, FiBriefcase, FiUsers, FiTrendingUp } from 'react-icons/fi';

const About = () => {
    const features = [
        { title: 'Full Stack Development', icon: <FiCode size={24} className="text-accent" /> },
        { title: 'Problem Solving', icon: <FiZap size={24} className="text-accent" /> },
        { title: 'Artificial Intelligence', icon: <FiCpu size={24} className="text-accent" /> },
        { title: 'Project Development', icon: <FiBriefcase size={24} className="text-accent" /> },
        { title: 'Leadership', icon: <FiUsers size={24} className="text-accent" /> },
        { title: 'Innovation', icon: <FiTrendingUp size={24} className="text-accent" /> }
    ];

    return (
        <section id="about" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4 text-center tracking-tight">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false, margin: "-100px" }}
                        className="w-full lg:w-5/12 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden p-2 glass-card shrink-0">
                            <img
                                src="/ak.jpg"
                                alt="Akhilesh A M"
                                className="object-cover w-full h-full rounded-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: false, margin: "-100px" }}
                        className="w-full lg:w-7/12 text-slate-300"
                    >
                        <div className="text-lg leading-relaxed mb-8 text-center lg:text-left space-y-4">
                            <p>
                                I am a driven technologist currently pursuing my <span className="text-white font-medium">B.E. in Computer Science Engineering</span>. With a deep passion for innovation and solving real-world problems, I continuously strive to push the boundaries of what code can achieve.
                            </p>
                        </div>

                        <div className="glass-card p-6 rounded-2xl mb-8">
                            <h4 className="text-white font-semibold mb-2 text-center lg:text-left">Education</h4>
                            <p className="text-slate-400 text-center lg:text-left">
                                B.E. in Computer Science Engineering <br />
                                AMC Engineering College, Bengaluru <br />
                                2022 – 2026 <br />
                                <span className="text-blue-400 font-semibold">CGPA: 8.39/10</span>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-4 glass-card p-4 rounded-2xl h-full">
                                    <div className="p-3 bg-white/5 border border-white/10 rounded-lg shrink-0 text-blue-400">
                                        {feature.icon}
                                    </div>
                                    <span className="font-medium text-white leading-tight">{feature.title}</span>
                                </div>
                            ))}
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
