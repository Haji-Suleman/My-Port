import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaServer, FaProjectDiagram } from "react-icons/fa";

const About = () => {
    return (
        <section
            id="about"
            className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
        >
            <motion.h2
                className="text-5xl font-bold mb-8 text-center text-yellow-400"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                About Me
            </motion.h2>

            <motion.p
                className="text-lg md:text-xl max-w-3xl text-center mb-12 leading-relaxed text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
            >
                I am a <span className="text-yellow-400 font-semibold">full-stack developer</span> with a strong focus on <span className="text-yellow-400 font-semibold">AI & ML powered backend systems</span>. I design scalable APIs, integrate intelligent features into applications, and turn complex math and ML concepts into <span className="text-yellow-400 font-semibold">real-world solutions</span>.
            </motion.p>

            <motion.div
                className="grid md:grid-cols-3 gap-8 max-w-5xl text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
            >
                <div className="p-6 bg-gray-700 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
                    <FaBrain className="mx-auto text-4xl text-yellow-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">AI / ML</h3>
                    <p className="text-gray-300">
                        Building machine learning models, integrating AI features into apps, and solving complex problems.
                    </p>
                </div>

                <div className="p-6 bg-gray-700 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
                    <FaServer className="mx-auto text-4xl text-yellow-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Backend</h3>
                    <p className="text-gray-300">
                        Designing scalable, secure APIs and backend systems using Node.js, NestJS, and databases like MongoDB.
                    </p>
                </div>

                <div className="p-6 bg-gray-700 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
                    <FaProjectDiagram className="mx-auto text-4xl text-yellow-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Projects</h3>
                    <p className="text-gray-300">
                        Creating full-stack applications with React, Tailwind, and modern tooling. Focused on real-world implementations.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
