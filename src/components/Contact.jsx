import React from "react";
import { motion } from "framer-motion";

function Contact() {
    return (
        <section
            id="contact"
            className="py-20 px-6 max-w-4xl mx-auto text-center bg-gray-900 text-white rounded-xl shadow-lg"
        >
            <motion.h3
                className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                Get In Touch
            </motion.h3>

            <motion.p
                className="mb-8 text-gray-300 text-lg"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                Connect with me on GitHub, LinkedIn, or via email. I’m always open to collaboration, projects, or just a friendly chat!
            </motion.p>

            <motion.div
                className="flex justify-center space-x-8 text-xl md:text-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <a
                    href="https://github.com/Haji-Suleman"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-400 transition-all duration-300"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/haji-suleman-553753369/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-400 transition-all duration-300"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:mirhajisulemanjamali@gmail.com"
                    className="hover:text-yellow-400 transition-all duration-300"
                >
                    Email
                </a>
            </motion.div>
        </section>
    );
}

export default Contact;
