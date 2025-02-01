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
import profilePic from "../assets/Profile.jpeg";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="fixed left-2 top-1/2 transform -translate-y-1/2 flex flex-col items-start space-y-4 w-16">
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
      {/* <main className="ml-20 flex-1 p-10">
        <section
          id="home"
          className="h-screen flex flex-col justify-center items-center text-center"
        >
          <h1 className="text-5xl font-bold">Jeel Gandhi</h1>
          <p className="text-xl text-gray-500 mt-2">
            I&apos;m a{" "}
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
          <div className="container mx-auto p-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-4 items-center">About Me</h1>

              <p className="text-lg mb-4">
                I am passionate tech-enthusiast with a &apos;can-do&apos;
                attitude. Have a willingness to explore new languages, tools,
                and emerging technologies. Full-Stack and AI/ML Developer with
                passion for building innovative solutions that have real impact.
                While being oriented toward personal growth, I am exploring ways
                to integrate models of generative AI or create the most
                cutting-edge web application. Let&apos;s collaborate and turn
                ideas into reality!
              </p>
              <div className="flex items-center space-x-6 mb-4">
                <Image
                  src={profilePic}
                  alt="Your Name"
                  width={200}
                  height={200}
                  className="rounded-full"
                />

                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Full Stack Developer & AI/ML Enthusiast
                  </h2>
                  <div className="mb-4">
                    <p>
                      <strong>Highest Education:</strong> Master of Science
                    </p>
                    <p>
                      <strong>City:</strong> Bellevue, WA
                    </p>
                    <p>
                      <strong>Majors:</strong> Computer Science
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:anything@harshnagoriya.info"
                        className="text-blue-500"
                      >
                        anything@harshnagoriya.info
                      </a>
                    </p>
                  </div>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Demonstrated expertise in backend development, utilizing
                      Python and Java to create and optimize API endpoints.
                    </li>
                    <li>
                      Proficient in implementing scalable cloud solutions...
                    </li>
                    <li>
                      Familiarity with Agile methodologies and CI/CD pipelines.
                    </li>
                    <li>
                      Proven track record in Software Development Engineer in
                      Test...
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
      </main> */}
      <main className="flex-1 flex justify-center ml-20 p-10">
        <div className="w-full space-y-44">
          <section
            id="home"
            className="h-screen flex flex-col justify-center items-center text-center"
          >
            <h1 className="text-5xl font-bold">Jeel Gandhi</h1>
            <p className="text-xl text-gray-500 mt-2">
              I&apos;m a{" "}
              <span className="text-blue-500">
                <ReactTyped
                  strings={[
                    "Software Developer",
                    "Full Stack Developer",
                    "AI/ML Enthusiast",
                  ]}
                  typeSpeed={60}
                  backSpeed={50}
                  loop
                />
              </span>
            </p>
          </section>

          {/* About Section */}

          <section
            id="about"
            className="p-30 h-screen flex flex-col justify-between mb-72"
          >
            <div className="flex flex-col items-center mt-auto">
              <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
              <hr />
              <p className="text-lg text-center mb-6">
                I am passionate tech-enthusiast with a &apos;can-do&apos;
                attitude. Have a willingness to explore new languages, tools,
                and emerging technologies. Full-Stack and AI/ML Developer with
                passion for building innovative solutions that have real impact.
                While being oriented toward personal growth, I am exploring ways
                to integrate models of generative AI or create the most
                cutting-edge web application. Let&apos;s collaborate and turn
                ideas into reality!
              </p>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              <Image
                src={profilePic}
                alt="Your Name"
                className="rounded-full object-cover w-72 h-72  mb-2"
              />
              <div className="-mt-10">
                <h2 className="text-2xl font-bold mb-4">
                  Full Stack Developer & AI/ML Enthusiast
                </h2>
                <p>
                  <strong>Education:</strong> B.Tech in Information Technology
                </p>
                <p>
                  <strong>City:</strong> Surat, GJ
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:jeelgandhi4585@gmail.com"
                    className="text-blue-500"
                  >
                    jeelgandhi4585@gmail.com
                  </a>
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    Developed full-stack applications using the MERN stack.
                  </li>
                  <li>Implemented AI/ML models in Python.</li>
                  <li>Built backend systems using Spring Boot and Java.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Other Sections */}
          <section id="skills" className="p-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center">Skills</h2>
            <ul className="list-disc ml-6 text-gray-600 mt-2 text-center">
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
              <li>MongoDB & PostgreSQL</li>
            </ul>
          </section>

          <section id="experience" className="p-10">
            <h2 className="text-3xl font-bold text-center">Experience</h2>
            <p className="text-gray-600 text-center mt-2">
              [Your job experience details here]
            </p>
          </section>

          <section id="accomplishments" className="p-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center">Accomplishments</h2>
            <p className="text-gray-600 text-center mt-2">
              [Certifications, projects, awards]
            </p>
          </section>

          <section id="contact" className="p-10">
            <h2 className="text-3xl font-bold text-center">Contact</h2>
            <p className="text-gray-600 text-center mt-2">
              Email: your@email.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
