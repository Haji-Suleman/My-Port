import React from "react";
import { Link } from "react-scroll";

function Navbar() {
    return (
        <nav className="fixed w-full bg-gray-900 text-white shadow-lg z-50">
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
                <div className="text-2xl font-bold text-yellow-400">Haji Suleman</div>
                <ul className="flex space-x-6">
                    {["home", "about", "skills", "projects", "contact"].map((section) => (
                        <li key={section} className="cursor-pointer hover:text-yellow-400">
                            <Link
                                to={section}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-70} // adjust for navbar height
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
