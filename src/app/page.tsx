"use client";
import React from "react";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="fixed left-2 top-1/2 transform -translate-y-1/2 flex flex-col items-start space-y-4">
        <a
          href="#home"
          className="group flex items-center justify-start p-2 rounded-full transition-all transform group-hover:scale-110 hover:bg-gray-300"
        >
          <div className="bg-gray-300 p-2 rounded-full inline-flex items-center justify-center">
            <FaHome size={24} className="text-gray-700" />
          </div>
          <span className=" text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Home
          </span>
        </a>

        <a
          href="#about"
          className="group flex items-center justify-start p-2 rounded-full transition-all transform group-hover:scale-110 hover:bg-gray-300"
        >
          <div className="bg-gray-300 p-2 rounded-full inline-flex items-center justify-center">
            <FaUser size={24} className="text-gray-700" />
          </div>
          <span className=" text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            About
          </span>
        </a>

        <a
          href="#education"
          className="group flex items-center justify-start p-2 rounded-full transition-all transform group-hover:scale-110 hover:bg-gray-300"
        >
          <div className="bg-gray-300 p-2 rounded-full inline-flex items-center justify-center">
            <FaGraduationCap size={24} className="text-gray-700" />
          </div>
          <span className=" text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Education
          </span>
        </a>

        <a
          href="#experience"
          className="group flex items-center justify-start p-2 rounded-full transition-all transform group-hover:scale-110 hover:bg-gray-300"
        >
          <div className="bg-gray-300 p-2 rounded-full inline-flex items-center justify-center">
            <FaBriefcase size={24} className="text-gray-700" />
          </div>
          <span className=" text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Experience
          </span>
        </a>

        <a
          href="#awards"
          className="group flex items-center justify-start p-2 rounded-full transition-all transform group-hover:scale-110 hover:bg-gray-300"
        >
          <div className="bg-gray-300 p-2 rounded-full inline-flex items-center justify-center">
            <FaAward size={24} className="text-gray-700" />
          </div>
          <span className=" text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Awards
          </span>
        </a>

        <a
          href="#contact"
          className="group flex items-center justify-start p-2 rounded-full transition-all transform group-hover:scale-110 hover:bg-gray-300"
        >
          <div className="bg-gray-300 p-2 rounded-full inline-flex items-center justify-center">
            <FaEnvelope size={24} className="text-gray-700" />
          </div>
          <span className=" text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Contact
          </span>
        </a>

        <a
          href="#resume"
          className="group flex items-center justify-start p-2 rounded-full transition-all transform group-hover:scale-110 hover:bg-gray-300"
        >
          <div className="bg-gray-300 p-2 rounded-full inline-flex items-center justify-center">
            <FaFileAlt size={24} className="text-gray-700" />
          </div>
          <span className=" text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Resume
          </span>
        </a>
      </aside>

      {/* Content */}
      <main className="ml-20 flex-1 p-10">
        <section
          id="home"
          className="h-screen flex flex-col justify-center items-center text-center"
        >
          <h1 className="text-5xl font-bold">Jeel Gandhi</h1>
          <p className="text-xl text-gray-500 mt-2">
            I'm a{" "}
            <span className="text-blue-500">
              <ReactTyped
                strings={[
                  "Software Developer",
                  "Full Stack Developer",
                  "AI/ML Enthusiast",
                ]}
                typeSpeed={60}
                backSpeed={50}
                backDelay={1000}
                loop
              />
            </span>
          </p>
        </section>

        <section id="about" className="p-10">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-gray-600 mt-2">
            I am a software engineer specializing in web development...
          </p>
        </section>

        <section id="skills" className="p-10 bg-gray-50">
          <h2 className="text-3xl font-bold">Skills</h2>
          <ul className="list-disc ml-6 text-gray-600 mt-2">
            <li>React & Next.js</li>
            <li>Node.js & Express</li>
            <li>MongoDB & PostgreSQL</li>
          </ul>
        </section>

        <section id="experience" className="p-10">
          <h2 className="text-3xl font-bold">Experience</h2>
          <p className="text-gray-600 mt-2">
            [Your job experience details here]
          </p>
        </section>

        <section id="accomplishments" className="p-10 bg-gray-50">
          <h2 className="text-3xl font-bold">Accomplishments</h2>
          <p className="text-gray-600 mt-2">
            [Certifications, projects, awards]
          </p>
        </section>

        <section id="contact" className="p-10">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-gray-600 mt-2">Email: your@email.com</p>
        </section>
      </main>
    </div>
  );
};

export default Home;
