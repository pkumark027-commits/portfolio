import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedProject(null);
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedProject]);

    const projects = [
        {
            title: "Smart Helpdesk System",
            shortDescription: "A comprehensive full-stack AI-powered platform for educational institutions to efficiently manage, track, and resolve support tickets using intelligent automation.",
            techStack: ["React", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Tailwind CSS"],
            overview: "The Smart Helpdesk System is a robust support management platform meticulously engineered for colleges and educational institutions. Designed to bridge the communication gap between students, faculty, and administration, this application streamlines the process of raising support tickets. By integrating Google's Gemini AI, the system provides instant, intelligent preliminary responses to common queries, drastically reducing the manual workload for the support staff. It features dedicated dashboards tailored for different user roles (Students, Staff, and Admins), providing a centralized, transparent workflow for issue resolution from creation to closure.",
            features: [
                "Secure User Authentication & Authorization using JWT",
                "Strict Role-Based Access Control (RBAC) ensuring data privacy",
                "Customized Dashboards for Students, Staff, and Administrators",
                "Real-time Ticket Creation, Updating, and Status Tracking",
                "Automated AI-Powered Assistance utilizing Gemini AI for instant replies",
                "Advanced filtering and search capabilities for administrators",
                "Fully Responsive Design optimized for desktop, tablet, and mobile",
                "Scalable MongoDB Database Architecture for efficient data retrieval",
                "Secure, RESTful Backend APIs built with Express and Node.js"
            ],
            challenges: [
                "Designing and implementing a scalable, secure role-based access control system from scratch.",
                "Effectively prompting and integrating the Gemini AI API to provide accurate, context-aware responses.",
                "Architecting complex MongoDB schemas to handle ticket lifecycles, user references, and AI chat histories.",
                "Ensuring complete data security and preventing unauthorized access to sensitive administrative routes.",
                "Optimizing the React frontend to handle state efficiently when filtering through large volumes of tickets.",
                "Creating a completely responsive and accessible dashboard experience across all device sizes."
            ],
            githubUrl: "https://github.com/Akhilesh6803-AM/Smart-HelpDesk-System",
            demoUrl: "https://smart-helpdesk-system.vercel.app/"
        },
        {
            title: "Fine-Grained Cyberbullying Detection",
            shortDescription: "An advanced machine learning pipeline leveraging DistilBERT to accurately detect and classify the specific severity levels of cyberbullying in real-time online text.",
            techStack: ["Python", "DistilBERT", "Flask", "SQLite", "PyTorch", "NLP"],
            overview: "As digital interactions increase, so does the prevalence of online harassment. This project is a sophisticated NLP-powered machine learning application designed to identify harmful online content and classify the exact severity level of cyberbullying. Rather than a simple binary classification (bullying vs. non-bullying), this system provides fine-grained categorization, identifying nuances in toxic language. The backend leverages a fine-tuned DistilBERT transformer model to analyze text in real-time, exposed via a Flask API and integrated with a frontend interface, aiming to create safer, actively monitored digital environments.",
            features: [
                "Real-time Cyberbullying Detection in user-generated text",
                "Multi-class Severity Classification (e.g., mild, moderate, severe toxic language)",
                "State-of-the-Art Natural Language Processing using Hugging Face Transformers",
                "Highly accurate predictions driven by a fine-tuned DistilBERT model",
                "Comprehensive Text Preprocessing Pipeline (tokenization, stop-word removal, stemming)",
                "RESTful Flask Web API connecting the ML model to client applications",
                "SQLite Data Storage for logging analyzed texts and prediction outcomes",
                "Interactive Web Interface for users to test text snippets and view classifications instantly"
            ],
            challenges: [
                "Handling extreme class imbalance in the training dataset to prevent model bias towards non-toxic text.",
                "Designing an efficient text preprocessing pipeline that cleans noisy internet slang without losing semantic meaning.",
                "Fine-tuning large transformer models (DistilBERT) on limited computational resources.",
                "Optimizing the model's inference time to ensure real-time API response speeds.",
                "Translating complex machine learning outputs into easily understandable UI components for end-users.",
                "Deploying heavy PyTorch/Transformer models in a lightweight Flask environment."
            ],
            githubUrl: "https://github.com/Akhilesh6803-AM/Cyberbullying-Detection",
            demoUrl: "https://cyberbullying-detection-ttjv.onrender.com/"
        },
        {
            title: "Personal Portfolio Website",
            shortDescription: "A highly interactive, visually stunning developer portfolio showcasing my projects, skills, and professional journey, built with modern frontend technologies.",
            techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Lucide Icons"],
            overview: "This personal portfolio is more than just a resume; it's a testament to my capabilities as a frontend developer. Built from the ground up using React and Vite for blazing-fast performance, it focuses heavily on delivering a premium, engaging user experience. The design language employs a modern dark theme with elegant glassmorphism effects, striking gradient typography, and meticulously crafted micro-interactions. Framer Motion is used extensively to orchestrate smooth scroll-triggered animations and fluid layout transitions, ensuring the website feels alive and responsive across all devices.",
            features: [
                "Completely Responsive Design ensuring pixel-perfect layout on mobile, tablet, and desktop screens",
                "Smooth Scroll Navigation with active section highlighting",
                "Complex, staggered entrance animations and scroll-linked effects powered by Framer Motion",
                "Dynamic Skills Showcase with categorized technology badges",
                "Interactive Project Gallery featuring complex state management and animated modals",
                "Aesthetic Glassmorphism Design System with backdrop filters and subtle borders",
                "Performance Optimized with lazy loading, optimal asset delivery, and React best practices",
                "Clean, maintainable, and highly reusable component-based architecture"
            ],
            challenges: [
                "Orchestrating complex sequence animations using Framer Motion without causing performance bottlenecks or layout thrashing.",
                "Creating a perfectly responsive Glassmorphism UI that looks consistent across different browsers and rendering engines.",
                "Managing complex React state for the interactive project modals while preventing background scrolling.",
                "Maintaining a strict, consistent visual hierarchy and color palette throughout the entire application.",
                "Balancing high-end visual flair with strict web accessibility and high Lighthouse performance scores."
            ],
            githubUrl: "https://github.com/pkumark027-commits/portfolio",
            demoUrl: "https://portfolio-omega-ashen-aqmn6qt238.vercel.app/"
        },
        {
            title: "Neobrutalism E-Commerce Platform",
            shortDescription: "A striking, functional e-commerce storefront utilizing the bold Neobrutalism design trend, featuring interactive product pages and a robust shopping cart.",
            techStack: ["React", "Tailwind CSS", "JavaScript", "Context API", "React Router"],
            overview: "Breaking away from standard corporate web design, this e-commerce platform embraces the Neobrutalism design philosophy—characterized by stark contrasts, bold typography, unapologetic raw styling, and sharp, hard-shadowed UI elements. Beyond its unique aesthetic, it is a fully functional frontend application. It simulates a complete shopping experience, featuring dynamic product listings, category filtering, detailed product view pages, and a persistent shopping cart state managed via React Context API.",
            features: [
                "Dynamic Product Listings fetched and rendered from a structured JSON dataset or mock API",
                "Highly Interactive User Interface with bold, physical-feeling button press animations",
                "Fully Responsive Grid Layout adapting seamlessly to various screen sizes",
                "Complete Shopping Cart Functionality (Add, Remove, Adjust Quantity, Calculate Total)",
                "Global State Management using React Context API for cart persistence across routes",
                "Client-side routing implemented with React Router for instant page transitions",
                "Unique Neobrutalism Design System using hard borders, solid drop shadows, and high-contrast colors",
                "Reusable UI Components (Cards, Buttons, Inputs) adhering strictly to the design language"
            ],
            challenges: [
                "Translating the non-standard, aggressive Neobrutalism aesthetic into functional, accessible web components.",
                "Building a robust global state management system for the shopping cart without relying on heavy external libraries like Redux.",
                "Ensuring UI elements remain interactive and intuitively clickable despite the unconventional flat, hard-shadowed styling.",
                "Managing complex responsive layouts where bold, oversized typography could easily break the container boundaries.",
                "Structuring the application to allow for easy future integration with a real backend payment processor."
            ],
            githubUrl: "https://github.com/Akhilesh6803-AM/E-Commerce",
            demoUrl: "https://v0-ak-e-commerce.vercel.app/"
        }
    ];

    return (
        <section id="projects" className={`py-20 relative ${selectedProject ? 'z-[100]' : 'z-10'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 tracking-tight">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Modified the hover effect here: Removed the aggressive glowing div and added subtle card transitions */}
                            <div className="glass-card relative h-full rounded-3xl p-8 flex flex-col justify-between border border-white/10 bg-slate-900/40 backdrop-blur-md overflow-hidden hover:bg-slate-800/60 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/30 transition-all duration-300 z-10">
                                
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 shadow-inner group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors">
                                            <span className="text-xl font-bold text-blue-400">0{index + 1}</span>
                                        </div>
                                        <div className="flex gap-4">
                                            {project.githubUrl && project.githubUrl !== '#' && (
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-slate-400 hover:text-white bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                                    <FiGithub size={20} />
                                                </a>
                                            )}
                                            {project.demoUrl && project.demoUrl !== '#' && (
                                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-slate-400 hover:text-white bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                                    <FiExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed mb-6 line-clamp-3">
                                        {project.shortDescription}
                                    </p>
                                </div>

                                <div>
                                    <ul className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.slice(0, 4).map((tech, techIndex) => (
                                            <li key={techIndex} className="text-xs font-medium text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                                                {tech}
                                            </li>
                                        ))}
                                        {project.techStack.length > 4 && (
                                            <li className="text-xs font-medium text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                                                +{project.techStack.length - 4} more
                                            </li>
                                        )}
                                    </ul>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 text-blue-400 font-semibold group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Read More Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                        >
                            <div 
                                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                                onClick={() => setSelectedProject(null)}
                            ></div>
                            
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                            >
                                {/* Modal Header */}
                                <div className="p-6 border-b border-white/10 flex justify-between items-start bg-slate-900/80 backdrop-blur-md sticky top-0 z-10">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 pr-8">
                                        {selectedProject.title}
                                    </h3>
                                    <button 
                                        onClick={() => setSelectedProject(null)}
                                        className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors absolute right-6 top-6"
                                        aria-label="Close modal"
                                    >
                                        <FiX size={24} />
                                    </button>
                                </div>

                                {/* Modal Body (Scrollable) */}
                                <div className="p-6 md:p-8 overflow-y-auto">
                                    <div className="space-y-8">
                                        {/* Overview */}
                                        <section>
                                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                                                <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-3"></span>
                                                Overview
                                            </h4>
                                            <p className="text-slate-300 leading-relaxed">
                                                {selectedProject.overview}
                                            </p>
                                        </section>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Key Features */}
                                            <section>
                                                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                                    <span className="w-1.5 h-6 bg-purple-500 rounded-full mr-3"></span>
                                                    Key Features
                                                </h4>
                                                <ul className="space-y-2">
                                                    {selectedProject.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start text-slate-300">
                                                            <span className="text-blue-400 mr-2 mt-1">▹</span>
                                                            <span className="flex-1 text-sm leading-relaxed">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </section>

                                            {/* Challenges & Learnings */}
                                            <section>
                                                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                                    <span className="w-1.5 h-6 bg-pink-500 rounded-full mr-3"></span>
                                                    Challenges & Learnings
                                                </h4>
                                                <ul className="space-y-2">
                                                    {selectedProject.challenges.map((challenge, idx) => (
                                                        <li key={idx} className="flex items-start text-slate-300">
                                                            <span className="text-purple-400 mr-2 mt-1">▹</span>
                                                            <span className="flex-1 text-sm leading-relaxed">{challenge}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </section>
                                        </div>

                                        {/* Tech Stack */}
                                        <section>
                                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                                <span className="w-1.5 h-6 bg-green-500 rounded-full mr-3"></span>
                                                Technology Stack
                                            </h4>
                                            <div className="flex flex-wrap gap-3">
                                                {selectedProject.techStack.map((tech, idx) => (
                                                    <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-slate-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-colors shadow-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </div>

                                {/* Modal Footer */}
                                <div className="p-6 border-t border-white/10 bg-slate-900/80 backdrop-blur-md flex flex-wrap gap-4 mt-auto sticky bottom-0 z-10">
                                    {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                                        <a 
                                            href={selectedProject.githubUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-all duration-300"
                                        >
                                            <FiGithub size={20} />
                                            <span>Source Code</span>
                                        </a>
                                    )}
                                    {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                                        <a 
                                            href={selectedProject.demoUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-white font-medium transition-all duration-300 shadow-lg shadow-blue-500/25"
                                        >
                                            <FiExternalLink size={20} />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Projects;
