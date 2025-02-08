import React, { useState } from "react";
import img1 from "../../assets/images/freshcart.png";
import img2 from "../../assets/images/logisto.png";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projectData = [
    {
      title: "Fresh Cart",
      image: img1,
      description:
        "A responsive E-commerce 'Fresh Cart' built with ReactJS for dynamic components and Vite for fast, optimized performance.",
      link: "https://fresh-cart-rho-nine.vercel.app/",
    },
    {
      title: "Logisto",
      image: img2,
      description:
        "A Logistics website built with ReactJS for dynamic components and Vite for fast, optimized performance",
      link: "https://logistics-one-pi.vercel.app/",
    },
  ];

  return (
    <div id="project_page" className="bg-pink-50 h-screen py-16 px-6">
      <h2 className="text-center text-4xl font-extrabold text-pink-600 mb-8">
        Projects
      </h2>

      {/* Grid Layout for Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectData.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold text-pink-500">{project.title}</h3>
            
            {/* Clickable Image with Transition */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-lg mt-4 shadow-md cursor-pointer transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
              onClick={() => setSelectedImage(project.image)}
            />

            <p className="text-gray-700 mt-4">{project.description}</p>

            {/* GitHub Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-pink-600 hover:text-pink-400 transition duration-300"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="link"
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="currentColor"
              >
                <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c-10.3-14.4-6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path>
              </svg>
              View on GitHub
            </a>
          </div>
        ))}
      </div>

      {/* Image Modal (Enlarges when clicked) */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-3/4 md:w-1/2 rounded-lg shadow-2xl transition-transform duration-500 scale-100 hover:scale-105"
          />
          <button
            className="absolute top-5 right-5 text-white text-2xl bg-pink-500 p-2 rounded-full hover:bg-pink-700"
            onClick={() => setSelectedImage(null)}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
