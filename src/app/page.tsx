"use client";
import React, { JSX } from "react";
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaEnvelope,
  FaFileAlt,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";
import profilePic from "../assets/Profile.jpeg";
import Image from "next/image";
import dduPic from "../assets/ddu.png";
import { FaGithub } from "react-icons/fa6";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-full"
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-start space-y-4 w-16
  transition-all duration-300 md:flex ${
    isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
  }`}
      >
        <NavItem href="#home" icon={<FaHome />} text="Home" />
        <NavItem href="#about" icon={<FaUser />} text="About" />
        <NavItem
          href="#education"
          icon={<FaGraduationCap />}
          text="Education"
        />
        <NavItem href="#experience" icon={<FaBriefcase />} text="Experience" />
        <NavItem href="#awards" icon={<FaAward />} text="Awards" />
        <NavItem href="#contact" icon={<FaEnvelope />} text="Contact" />
        <NavItem href="#resume" icon={<FaFileAlt />} text="Resume" />
      </aside>

      <main className="flex-1 flex justify-center md:ml-20">
        <div className="w-full space-y-32">
          <section
            id="home"
            className="h-screen flex flex-col justify-center items-start text-left px-10 md:items-center md:text-center md:px-20 transition-all"
          >
            <h1 className="text-3xl sm:text-5xl font-bold">Jeel Gandhi</h1>
            <p className="text-lg sm:text-xl text-gray-500 mt-2">
              I&apos;m a{" "}
              <span className="text-[#fd8439]">
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

            {/* Social Links */}
            <div className="mt-4 flex flex-wrap justify-center gap-6">
              <SocialLink
                href="https://www.linkedin.com/in/jeel-gandhi-71800624b/"
                icon={<FaLinkedinIn size={24} />}
              />
              <SocialLink
                href="https://github.com/JEELGANDHI21"
                icon={<FaGithub size={24} />}
              />
              <SocialLink
                href="https://www.instagram.com/jeel._.gandhi/#"
                icon={<FaInstagram size={24} />}
              />
            </div>
          </section>

          {/* About Section */}

          <section
            id="about"
            className="p-10 md:p-30 min-h-screen flex flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
              <hr />
              <p className="text-lg text-center mb-6">
                I am a passionate tech-enthusiast with a &apos;can-do&apos;
                attitude. I have a willingness to explore new languages, tools,
                and emerging technologies. Full-Stack and AI/ML Developer with a
                passion for building innovative solutions that have a real
                impact. While being oriented toward personal growth, I am
                exploring ways to integrate models of generative AI or create
                the most cutting-edge web applications. Let&apos;s collaborate
                and turn ideas into reality!
              </p>
            </div>

            {/* Responsive Flex Layout for Image and Text */}
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4">
              {/* Profile Image */}
              <div className="relative flex justify-center mb-6 md:mb-0 md:mr-10 md:-mt-0">
                <div className="w-[400px] h-[400px] md:w-[450px] md:h-[450px] relative">
                  {/* Outer Circle Borders */}
                  <div className="w-[460px] h-[460px] md:w-[510px] md:h-[510px] left-[-55px] top-[-55px] absolute rounded-full border border-[#fd8439]" />
                  <div className="w-[430px] h-[430px] md:w-[480px] md:h-[480px] left-[-40px] top-[-40px] absolute rounded-full border-2 border-[#fd8439]" />
                  <div className="w-[400px] h-[400px] md:w-[450px] md:h-[450px] left-[-20px] top-[-20px] absolute rounded-full border-2 border-[#fd8439]" />
                  <div className="w-[370px] h-[370px] md:w-[420px] md:h-[420px] left-[0px] top-[0px] absolute rounded-full border-4 border-[#fd8439]" />
                  <div className="w-[340px] h-[340px] md:w-[390px] md:h-[390px] left-[20px] top-[20px] absolute rounded-full border-4 border-[#fd8439]" />
                  <div className="w-[310px] h-[310px] md:w-[360px] md:h-[360px] left-[40px] top-[40px] absolute rounded-full border-4 border-[#fd8439]" />

                  {/* Profile Picture */}
                  <Image
                    src={profilePic}
                    alt="Your Name"
                    className="rounded-full object-cover w-72 h-72 md:w-80 md:h-80 mb-2"
                  />
                </div>
              </div>
              {/* Text Section */}
              <div className="text-center md:text-left mt-4 md:-mt-8 md:ml-10">
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

          <section
            id="education"
            className="p-10 md:p-30 min-h-screen flex flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center mb-6">Education</h1>
              <hr />
              <div className="max-w-xs sm:max-w-md md:max-w-lg bg-white shadow-lg rounded-lg flex flex-col items-center">
                {/* University Logo */}
                <Image
                  src={dduPic}
                  alt="University Logo"
                  className="w-full h-full object-cover sm:w-full sm:h-full md:w-full md:h-full rounded-t-lg"
                />

                <div className="flex flex-col items-center">
                  {/* Hover Effect for the Text Section */}
                  <div className="group hover:bg-[#fd8439] hover:opacity-80 transition-all duration-300 w-full text-center rounded-lg">
                    {/* University Name */}
                    <h2 className="text-xl font-bold mb-2 sm:text-2xl md:text-3xl text-black   group-hover:text-white">
                      Dharmsinh Desai University
                    </h2>
                    <p className="text-lg font-mono text-black">Bachelor Of Technology</p>
                    <p className="text-lg text-black">
                      (Information Technology)
                    </p>

                    {/* What I Learned */}
                    <p className="text-gray-600 text-center sm:text-lg md:text-xl mt-4">
                      Releveant Coursework <br/>
                        Data Structures and Algorithm, Machine Learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="p-10 md:p-30 h-screen flex flex-col justify-between"
          >
            <div className="flex flex-col items-center mt-auto">
              <h1 className="text-3xl font-bold text-center mb-6">Skills</h1>
              <ul className="list-disc ml-6 text-gray-600 mt-2 text-center">
                <li>React & Next.js</li>
                <li>Node.js & Express</li>
                <li>MongoDB & PostgreSQL</li>
              </ul>
            </div>
          </section>

          <section id="experience" className="p-10">
            <h2 className="text-3xl font-bold text-center">Experience</h2>
            <p className="text-gray-600 text-center mt-2">
              [Your job experience details here]
            </p>
          </section>

          <section id="accomplishments" className="p-10 bg-gray-50">
            <div className="h-[805.07px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="p-[16.19px] bg-white rounded-md border-2 border-black flex-col justify-start items-center gap-[16.19px] flex">
                <img
                  className="w-[266px] h-[159.81px] rounded-[5.15px] shadow-[0px_2.943765163421631px_0px_0px_rgba(243,132,212,1.00)] border-2"
                  src="https://via.placeholder.com/266x160"
                  alt="nothing"
                />
                <div className="justify-start items-end gap-[27.23px] inline-flex">
                  <div className="text-[#0c0c0c] text-xl font-normal font-['Handlee'] leading-tight">
                    4 style Portfolio
                    <br />
                    design
                  </div>
                  <div className="w-[104.51px] h-[49.31px] relative">
                    <div className="w-[89.78px] h-[33.12px] pl-[13.17px] pr-[16.47px] py-[6.59px] left-[14.72px] top-[16.19px] absolute bg-[#f072cd] rounded-tl-sm rounded-tr-[19.76px] rounded-bl-[19.76px] rounded-br-[19.76px] shadow-[3.293558120727539px_3.293558120727539px_8.233894348144531px_0px_rgba(240,114,205,0.16)] border-2 border-[#db4a90] justify-start items-start gap-[6.59px] inline-flex">
                      <div className="grow shrink basis-0 self-stretch text-white text-[13.17px] font-medium font-['Inter'] leading-tight">
                        No-Code
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-[16.19px] bg-white rounded-md border-2 border-black flex-col justify-start items-center gap-[16.19px] flex">
                <img
                  className="w-[266px] h-[159.81px] rounded-[5.15px] shadow-[0px_2.943765163421631px_0px_0px_rgba(243,132,212,1.00)] border-2"
                  src="https://via.placeholder.com/266x160"
                  alt="nothing"
                />
                <div className="justify-start items-end gap-[27.23px] inline-flex">
                  <div className="text-[#0c0c0c] text-xl font-normal font-['Handlee'] leading-tight">
                    4 style Portfolio
                    <br />
                    design
                  </div>
                  <div className="w-[104.51px] h-[49.31px] relative">
                    <div className="w-[89.78px] h-[33.12px] pl-[13.17px] pr-[16.47px] py-[6.59px] left-[14.72px] top-[16.19px] absolute bg-[#5ab5e8] rounded-tl-sm rounded-tr-[19.76px] rounded-bl-[19.76px] rounded-br-[19.76px] shadow-[3.293558120727539px_3.293558120727539px_8.233894348144531px_0px_rgba(90,181,232,0.16)] border-2 border-[#1c6ab1] justify-start items-start gap-[6.59px] inline-flex">
                      <div className="grow shrink basis-0 self-stretch text-white text-[13.17px] font-medium font-['Inter'] leading-tight">
                        No-Code
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-[16.19px] bg-white rounded-md border-2 border-black flex-col justify-start items-center gap-[16.19px] flex">
                <img
                  className="w-[266px] h-[159.81px] rounded-[5.15px] shadow-[0px_2.943765163421631px_0px_0px_rgba(243,132,212,1.00)] border-2"
                  src="https://via.placeholder.com/266x160"
                  alt="nothing"
                />
                <div className="justify-start items-end gap-[27.23px] inline-flex">
                  <div className="text-[#0c0c0c] text-xl font-normal font-['Handlee'] leading-tight">
                    4 style Portfolio
                    <br />
                    design
                  </div>
                  <div className="w-[104.51px] h-[49.31px] relative">
                    <div className="w-[89.78px] h-[33.12px] pl-[13.17px] pr-[16.47px] py-[6.59px] left-[14.72px] top-[16.19px] absolute bg-[#7cf072] rounded-tl-sm rounded-tr-[19.76px] rounded-bl-[19.76px] rounded-br-[19.76px] shadow-[3.293558120727539px_3.293558120727539px_8.233894348144531px_0px_rgba(124,240,114,0.16)] border-2 border-[#4ed543] justify-start items-start gap-[6.59px] inline-flex">
                      <div className="w-[66px] self-stretch text-white text-[13.17px] font-medium font-['Inter'] leading-tight">
                        UI Design
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

interface NavItemProps {
  href: string;
  icon: JSX.Element;
  text: string;
}
interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-blue-500 transition-colors"
  >
    {icon}
  </a>
);

const NavItem: React.FC<NavItemProps> = ({ href, icon, text }) => (
  <a
    href={href}
    className="group flex items-center justify-start p-2 rounded-full transition-all transform hover:scale-95  hover:bg-[#fd8439] hover:opacity-80"
  >
    <div className="bg-[white]  p-2 rounded-full inline-flex items-center justify-center ">
      <span className="text-[#fd8439] ">{icon}</span>
    </div>
    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">
      {text}
    </span>
  </a>
);
