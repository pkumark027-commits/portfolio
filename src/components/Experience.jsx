import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Vayu Aarambh Innovations Pvt. Ltd.",
            duration: "Aug 2025 – Present",
            description: "Leading technology development and implementation by exploring modern technologies to build robust software systems and web applications.",
            highlights: [
                "Driving software and web application development with a focus on technical excellence.",
                "Directing Research & Development initiatives to adopt modern technologies for innovative solutions.",
                "Making core technical decisions and leading complex technical problem-solving efforts.",
                "Collaborating with team members to turn ideas and requirements into practical technical solutions."
            ],
            color: "teal"
        },
        {
            title: "Full Stack Web Development Intern",
            company: "SuprMentr Technologies",
            duration: "Feb 2026 – May 2026",
            description: "Developed 10+ responsive frontend interfaces/components using React.js, integrating them with backend services. Built and consumed RESTful APIs using Node.js, Express.js, and MongoDB for full-stack application development. Collaborated with a 3-member Agile team using Git for version control, contributing to sprint-based feature development and timely project delivery. Debugged and optimized frontend and backend modules, improving application reliability and maintainability.",
            color: "purple"
        },
        {
            title: "Project Based Experience",
            company: "Continuous Learning & Development",
            description: "Gained extensive practical experience through building diverse applications. Continuously expanded my technical stack by learning new topics and applying them to build real-world solutions. Developed a strong problem-solving mindset by actively encountering, debugging, and resolving complex errors. Additionally, learned how to effectively leverage AI tools to accelerate development and overcome technical challenges.",
            color: "blue"
        }
    ];

    return (
        <section id="experience" className="py-20 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 tracking-tight">
                        Experience
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="relative border-l-2 border-slate-700/50 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className={`absolute w-5 h-5 bg-[#0f172a] border-4 ${exp.color === 'blue' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : exp.color === 'teal' ? 'border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.5)]' : 'border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]'} rounded-full -left-[11px] top-8`}></div>

                            {/* Experience Card */}
                            <div className={`glass-card relative rounded-3xl p-6 md:p-8 border border-white/10 bg-slate-900/40 backdrop-blur-md overflow-hidden hover:bg-slate-800/60 hover:-translate-y-1 ${exp.color === 'blue' ? 'hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.2)] hover:border-blue-500/30' : exp.color === 'teal' ? 'hover:shadow-[0_10px_40px_-15px_rgba(45,212,191,0.2)] hover:border-teal-400/30' : 'hover:shadow-[0_10px_40px_-15px_rgba(168,85,247,0.2)] hover:border-purple-500/30'} transition-all duration-300`}>
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white tracking-wide">{exp.title}</h3>
                                        <p className={`font-medium text-lg mt-1 ${exp.color === 'blue' ? 'text-blue-400' : exp.color === 'teal' ? 'text-teal-400' : 'text-purple-400'}`}>
                                            {exp.company}
                                        </p>
                                    </div>
                                    {exp.duration && (
                                        <span className="text-sm font-semibold text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full shrink-0 self-start md:self-auto">
                                            {exp.duration}
                                        </span>
                                    )}
                                </div>
                                {exp.description && (
                                    <p className="text-slate-300 leading-relaxed text-base mt-4">
                                        {exp.description}
                                    </p>
                                )}
                                {exp.highlights && (
                                    <ul className="list-disc list-outside text-slate-300 leading-relaxed text-base mt-4 ml-5 space-y-1.5">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i}>{highlight}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;
