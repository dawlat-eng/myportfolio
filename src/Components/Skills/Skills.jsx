import React from "react";
import cssimg from "../../assets/images/css.png";
import htmlimg from "../../assets/images/html.png";
import bootstrapimg from "../../assets/images/bootstrap.png";
import figmaimg from "../../assets/images/figma.png";
import jsimg from "../../assets/images/js.png";
import nextimg from "../../assets/images/next.png";
import reactjsimg from "../../assets/images/reactjs.png";
import tailwindimg from "../../assets/images/tailwind.png";
import viteimg from "../../assets/images/vite.png";
import Typeimg from "../../assets/images/typescript.png";

export default function Skills() {
  return (
    <section id="skills_page" className="bg-pink-100 h-screen py-16 px-6 sm:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-pink-600 mb-8">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Skill Items */}
          {[ 
            { img: jsimg, name: "JavaScript" },
            { img: htmlimg, name: "HTML" },
            { img: cssimg, name: "CSS" },
            { img: tailwindimg, name: "Tailwind" },
            { img: viteimg, name: "Vite" },
            { img: reactjsimg, name: "ReactJS" },
            { img: bootstrapimg, name: "Bootstrap" },
            { img: figmaimg, name: "Figma" },
            { img: nextimg, name: "Next.js" },
            { img: Typeimg, name: "TypeScript" }
          ].map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110 md:hover:scale-105"
            >
              <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-2 object-contain" />
              <p className="font-semibold text-lg text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
