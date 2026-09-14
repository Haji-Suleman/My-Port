import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNestjs, SiMongodb, SiTailwindcss, SiCplusplus } from "react-icons/si";

const skills = [
    { name: "Python", icon: <FaPython size={30} />, level: 90 },
    { name: "C++", icon: <SiCplusplus size={30} />, level: 80 },
    { name: "JavaScript", icon: <FaJs size={30} />, level: 90 },
    { name: "TypeScript", icon: <SiTypescript size={30} />, level: 85 },
    { name: "React.js", icon: <FaReact size={30} />, level: 90 },
    { name: "NestJS", icon: <SiNestjs size={30} />, level: 85 },
    { name: "Node.js", icon: <FaNodeJs size={30} />, level: 85 },
    { name: "MongoDB", icon: <SiMongodb size={30} />, level: 80 },
    { name: "SQL", icon: <FaDatabase size={30} />, level: 75 },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={30} />, level: 90 },
];

function Skills() {
    return (
        <section id="skills" className="py-24 px-6 max-w-6xl mx-auto bg-gray-900 text-white">
            <h3 className="text-5xl font-extrabold mb-16 text-center text-yellow-400">
                Skills & Tech Stack
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                        <div className="text-yellow-400">{skill.icon}</div>
                        <div className="w-full">
                            <div className="flex justify-between mb-1">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3">
                                <motion.div
                                    className="bg-yellow-400 h-3 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: idx * 0.1 }}
                                ></motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
