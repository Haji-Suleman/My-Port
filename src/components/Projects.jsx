import React from "react";
import { motion } from "framer-motion";
import food_web from "../assets/food.png"
import assigment from "../assets/assigment.png"
import ml_image from "../assets/figure_3.png"
const projects = [
    {
        name: "Introduction Project",
        description: "Frontend Project: binary classification & regression",
        link: "https://assigmentweb.vercel.app/",
        image: assigment,
        tech: ["Maps", "React", "Frontend Development"],
    },
    {
        name: "Food Delivery Website",
        description: "Full-stack app connecting doctors & patients",
        link: "https://food-delivery-frontend-delta-two.vercel.app/",
        image: food_web,
        tech: ["Node.js", "Express", "MongoDB", "React", "Typescript"],
    },
    {
        name: "Machine learning Model",
        description: "Food delivery website with authentication & payments",
        link: "https://github.com/Haji-Suleman/Food-Delivery",
        image: ml_image,
        tech: ["Machine Learning", "Climate-model"],
    },
];

function Projects() {
    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto bg-gray-900 text-white">
            <h3 className="text-5xl font-extrabold mb-16 text-center text-yellow-400">
                Featured Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
                {projects.map((project, idx) => (
                    <motion.a
                        key={idx}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="relative group rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4">
                            <h4 className="text-2xl font-bold mb-2 text-yellow-400">{project.name}</h4>
                            <p className="mb-4">{project.description}</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}

export default Projects;
