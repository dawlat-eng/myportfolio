import React from "react";

export default function About() {
  return (
    <section className="bg-pink-50 h-screen py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center lg:text-left">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-pink-600 mb-6">About Me</h2>

        {/* Paragraph 1 */}
        <p className="text-lg md:text-xl text-gray-800 font-semibold leading-relaxed md:leading-loose">
          Hi, I'm a <span className="text-pink-700">passionate Frontend React Developer</span>  
          who loves creating beautiful, responsive, and intuitive web experiences.
        </p>

        {/* Paragraph 2 */}
        <p className="text-lg md:text-xl text-gray-800 font-semibold mt-6 leading-relaxed md:leading-loose">
          With expertise in React.js, Tailwind CSS, and modern UI/UX,  
          I focus on clean code, smooth interactions, and elegant designs that make an impact.  
          I love learning new things, taking on challenges,  
          and finding opportunities to grow and create cool things in the tech world.
        </p>

        {/* Paragraph 3 */}
        <p className="text-lg md:text-xl text-gray-800 font-semibold mt-6 leading-relaxed md:leading-loose">
          I believe in continuous learning, creativity, and empowering users  
          through stunning, high-performance websites.  
          Let's bring ideas to life together! ✨  
          Other than this, I love <span className="text-pink-700">singing, cooking, artistic things, and doing social work.</span>
        </p>
      </div>
    </section>
  );
}
