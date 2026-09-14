import React from "react";
import { motion } from "framer-motion";

function Footer() {
    return (
        <motion.footer
            className="py-8 text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <p className="mb-2 text-gray-400">
                © 2026 Haji Suleman. All rights reserved.
            </p>

            <p className="mb-4 text-gray-400">
                Made with <span className="text-red-500">❤️</span> and <span className="text-blue-400 font-semibold">React</span>
            </p>

            <div className="flex justify-center space-x-6 text-lg">
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
            </div>

            <p className="mt-4 text-gray-500 text-sm">
                Thanks for visiting my portfolio! Keep in touch 🚀
            </p>
        </motion.footer>
    );
}

export default Footer;
