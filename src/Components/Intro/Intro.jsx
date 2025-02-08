import React from 'react';
import myimg from '../../assets/images/profile.JPG';

export default function Intro() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center bg-pink-50 py-16 px-6 lg:px-24">
      {/* Text Content */}
      <div className="text-center lg:text-left text-white flex flex-col items-center lg:items-start">
        <h1 className="text-4xl sm:text-5xl text-pink-500 font-bold">Hey!</h1>
        <h1 className="text-5xl sm:text-6xl font-extrabold mt-2">
          <span className="text-pink-600">I'm Dawlat</span>
        </h1>
        <p className="text-lg sm:text-xl text-pink-500 mt-4">Web Developer</p>

        {/* Resume Button */}
        <div className="mt-6">
          <a 
            href="/Dawlat_Hussien_CV.pdf"  
            download="Dawlat_Hussien_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-400 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="mt-8 lg:mt-0 lg:ml-12">
        <img 
          src={myimg} 
          alt="Profile" 
          className="rounded-full h-48 sm:h-64 md:h-80 border-4 border-white shadow-lg transform transition duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
