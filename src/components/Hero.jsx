import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="hero"
            className="w-full h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex flex-col justify-center items-center text-center px-4"
        >
            <motion.h1
                className="text-5xl md:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hi, I’m <span className="text-yellow-400">Haji Suleman</span>
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
            >
                AI / ML-focused Developer with strong backend skills. I build scalable backend systems, integrate machine learning into real-world applications, and design maintainable full-stack projects.
            </motion.p>

            <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
            >
                <a
                    href="#about"
                    className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300"
                >
                    About Me
                </a>
                <a
                    href="#projects"
                    className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
                >
                    My Work
                </a>
            </motion.div>

            <motion.div
                className="mt-12 flex space-x-6 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
            >
                <p>🚀 AI / ML Development</p>
                <p>💻 Backend Engineering</p>
                <p>🔐 Security & APIs</p>
            </motion.div>
        </section>
    );
};

export default Hero;
