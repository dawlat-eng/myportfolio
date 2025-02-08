import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-pink-300 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Nav Container */}
        <div className="flex justify-center md:justify-center items-center py-4 relative">
          {/* Desktop Nav (Centered) */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-gray-200 transition text-lg font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button (Inside Full-Width Container) */}
        <div className="md:hidden absolute top-0 left-0 w-full bg-pink-300 py-4 flex justify-end px-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Nav (Dropdown) */}
        <div
          className={`md:hidden flex flex-col items-center bg-pink-400 transition-all duration-300 ${
            isOpen ? "max-h-60 opacity-100 py-4" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-center py-2 hover:bg-pink-500 w-full text-lg font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
