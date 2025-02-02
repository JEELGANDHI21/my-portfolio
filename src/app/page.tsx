"use client";
import React, { JSX, useState } from "react";
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
  FaBrain,
  FaTimes,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";
import {
  JavascriptOriginal,
  JavaOriginal,
  GitOriginal,
  DockerOriginal,
  KubernetesOriginal,
  GithubOriginal,
  AmazonwebservicesOriginalWordmark,
  CsharpOriginal,
  SpringOriginal,
  CplusplusOriginal,
  PythonOriginal,
  ReactOriginal,
  NodejsOriginal,
  ExpressOriginal,
  MongodbOriginal,
  MysqlOriginal,
  PostgresqlOriginal,
  NextjsOriginal,
  PostmanOriginal,
  DotNetOriginal,
} from "devicons-react";
import Image from "next/image";
import profilePic from "../assets/Profile.jpeg";
import dduPic from "../assets/ddu.png";
import BuyNSellHub from "../assets/BuyNSellHub.png";
import WPA from "../assets/WPA.jpg";
import FSD from "../assets/FSD.png";
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
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <aside
        className={`fixed md:left-0  top-1/2 transform -translate-y-1/2 flex flex-col items-start space-y-4 w-16
          transition-all duration-300 md:flex ${
            isOpen
              ? "translate-x-0 "
              : "-translate-x-full md:translate-x-0 -left-11"
          }`}
      >
        <NavItem href="#home" icon={<FaHome size={20} />} text="Home" />
        <NavItem href="#about" icon={<FaUser size={20} />} text="About" />
        <NavItem
          href="#education"
          icon={<FaGraduationCap size={20} />}
          text="Education"
        />
        <NavItem href="#skills" icon={<FaBrain size={20} />} text="Skills" />
        <NavItem
          href="projects"
          icon={<FaBriefcase size={20} />}
          text="Projects"
        />
        <NavItem href="#awards" icon={<FaAward size={20} />} text="Awards" />
        <NavItem
          href="#contact"
          icon={<FaEnvelope size={20} />}
          text="Contact"
        />
        <NavItem href="#resume" icon={<FaFileAlt size={20} />} text="Resume" />
      </aside>

      <main className="flex-1 flex justify-center md:ml-20 ml-4 px-4 md:px-0 overflow-x-hidden">
        <div className="w-full space-y-8">
          {/* Home Section */}
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
            className="p-10 md:p-30 flex flex-col justify-between"
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
              <div className="flex justify-center mb-6 md:mb-0 md:mr-10 md:-mt-0">
                <div className="w-[400px] h-[400px] md:w-[450px] md:h-[450px]  flex items-center justify-center">
                  {/* Outer Circle Borders - Always Visible */}
                  <div className="inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute md:left-40 -left-8 w-[460px] h-[460px] md:w-[510px] md:h-[510px] rounded-full border border-[#fd8439]" />
                    <div className="absolute md:left-44 -left-4 w-[430px] h-[430px] md:w-[480px] md:h-[480px] rounded-full border-2 border-[#fd8439]" />
                    <div className="absolute md:left-48  left-0 w-[400px] h-[400px] md:w-[450px] md:h-[450px] rounded-full border-2 border-[#fd8439]" />
                    <div className="absolute md:left-52 left-4 w-[370px] h-[370px] md:w-[420px] md:h-[420px] rounded-full border-4 border-[#fd8439]" />
                    <div className="absolute md:left-56  left-8 w-[340px] h-[340px] md:w-[390px] md:h-[390px] rounded-full border-4 border-[#fd8439]" />
                    <div className="absolute md:left-60 left-12 w-[310px] h-[310px] md:w-[360px] md:h-[360px] rounded-full border-4 border-[#fd8439]" />
                  </div>

                  {/* Profile Picture */}
                  <Image
                    src={profilePic}
                    alt="Your Name"
                    className="rounded-full object-cover w-72 h-72 md:w-80 md:h-80"
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

          {/* Education Section */}
          <section
            id="education"
            className="p-10 md:p-30 flex flex-col justify-between"
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
                    <h2 className="text-xl font-bold mb-2 sm:text-2xl md:text-3xl text-black group-hover:text-white">
                      Dharmsinh Desai University
                    </h2>
                    <p className="text-lg font-mono text-black">
                      Bachelor Of Technology
                    </p>
                    <p className="text-lg text-black">
                      (Information Technology)
                    </p>

                    {/* What I Learned */}
                    <p className="text-gray-600 text-center sm:text-lg md:text-xl mt-4">
                      Relevant Coursework <br />
                      Data Structures and Algorithm, Machine Learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className="p-10 md:p-30 flex flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center mb-6">Skills</h1>
              <hr />
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-6">
                {/* Skill Items */}
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <JavascriptOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    JavaScript
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <JavaOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    Java
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <CplusplusOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    C++
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <PythonOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    Python
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <SpringOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    SpringBoot
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <MysqlOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    MySQL
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <PostgresqlOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    PostgreSQL
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <ReactOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    React
                  </span>
                </div>
                <div className="p-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <NodejsOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    NodeJS
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <ExpressOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    ExpressJS
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <NextjsOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    NextJS
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <MongodbOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    MongoDB
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <CsharpOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    C#
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <DockerOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    Docker
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <KubernetesOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    Kubernetes
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <GitOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    GIT
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <AmazonwebservicesOriginalWordmark
                      size={40}
                      className="text-2xl"
                    />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    AWS
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <DotNetOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    .NET
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <GithubOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    Github
                  </span>
                </div>
                <div className="pt-2 sm:p-4 bg-white rounded-lg shadow-md text-center hover:bg-[#fd8439] hover:text-white transition-all duration-300">
                  <div className="flex justify-center items-center">
                    <PostmanOriginal size={40} className="text-2xl" />
                  </div>
                  <span className="md:text-lg text-sm font-medium block mt-3">
                    Postman
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="p-10 md:p-30 flex flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
              <hr />
              <div className="flex flex-wrap gap-4 justify-center">
                {/* Project 1 */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/5 p-[16.19px] bg-white rounded-md border-2 border-black flex flex-col justify-start items-center gap-[16.19px] group relative">
                  <Image
                    className="md:w-[350px] md:h-[200.81px] w-[266px] h-[159.81px] rounded-[5.15px] shadow-[0px_2.94px_0px_0px_rgba(253,132,57,1.00)] border-2"
                    src={BuyNSellHub}
                    alt="Project1"
                  />
                  <div className="flex justify-between items-center w-full px-4">
                    <div className="text-[#0c0c0c] md:text-xl text-lg font-normal font-['Handlee'] leading-tight">
                      BuyNSellHub
                      <br />
                      <p className="text-sm">
                        Tech Stack : MERN, AWS S3, Tailwind CSS
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://github.com/JEELGANDHI21/SDP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-1 bottom-1 md:bottom-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-[87px] h-[24px] md:w-[102.78px] md:h-[33px] px-[13.17px] py-[6.59px] bg-[#fd8439] rounded-tl-sm rounded-tr-[19.76px] rounded-bl-[19.76px] rounded-br-[19.76px] shadow-[3.29px_3.29px_8.23px_0px_rgba(240,114,205,0.16)] border-2 border-black flex items-center justify-center">
                      <span className="text-white md:text-[13.17px] text-[11px] font-medium font-['Inter'] leading-tight">
                        Source Code
                      </span>
                    </div>
                  </a>
                </div>

                {/* Project 2 */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/5 p-[16.19px] bg-white rounded-md border-2 border-black flex flex-col justify-start items-center gap-[16.19px] group relative">
                  <Image
                    className="md:w-[350px] md:h-[200.81px] w-[266px] h-[159.81px] rounded-[5.15px] shadow-[0px_2.94px_0px_0px_rgba(253,132,57,1.00)] border-2"
                    src={WPA}
                    alt="Project2"
                  />
                  <div className="flex justify-between items-center w-full px-4">
                    <div className="text-[#0c0c0c] md:text-xl text-lg font-normal font-['Handlee'] leading-tight">
                      AI - Wall Paint Estimation
                      <br />
                      <p className="text-sm">
                        Tech Stack : Python, Meta-SAM2, Streamlit
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://docs.google.com/document/d/1Mj_eHaayh55RxQcsra_3dPJSkq8G__T9/edit?usp=drive_link&ouid=109724698963648157939&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-1 bottom-1 md:bottom-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-[87px] h-[24px] md:w-[102.78px] md:h-[33px] px-[13.17px] py-[6.59px] bg-[#fd8439] rounded-tl-sm rounded-tr-[19.76px] rounded-bl-[19.76px] rounded-br-[19.76px] shadow-[3.29px_3.29px_8.23px_0px_rgba(240,114,205,0.16)] border-2 border-black flex items-center justify-center">
                      <span className="text-white md:text-[13.17px] text-[11px] font-medium font-['Inter'] leading-tight">
                        Source Code
                      </span>
                    </div>
                  </a>
                </div>

                {/* Project 3 */}
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/5 p-[16.19px] bg-white rounded-md border-2 border-black flex flex-col justify-start items-center gap-[16.19px] group relative md:mt-3">
                  <Image
                    className="md:w-[350px] md:h-[200.81px] w-[266px] h-[159.81px] rounded-[5.15px] shadow-[0px_2.94px_0px_0px_rgba(253,132,57,1.00)] border-2"
                    src={FSD}
                    alt="Project2"
                  />
                  <div className="flex justify-between items-center w-full px-4">
                    <div className="text-[#0c0c0c] md:text-xl text-lg font-normal font-['Handlee'] leading-tight">
                      Event Management System
                      <br />
                      <p className="text-sm">
                        Tech Stack : Java, SpringBoot, React, Tailwind
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://github.com/JEELGANDHI21/FSD_EVENT_MANAGEMENT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-1 bottom-1 md:bottom-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-[87px] h-[24px] md:w-[102.78px] md:h-[33px] px-[13.17px] py-[6.59px] bg-[#fd8439] rounded-tl-sm rounded-tr-[19.76px] rounded-bl-[19.76px] rounded-br-[19.76px] shadow-[3.29px_3.29px_8.23px_0px_rgba(240,114,205,0.16)] border-2 border-black flex items-center justify-center">
                      <span className="text-white md:text-[13.17px] text-[11px] font-medium font-['Inter'] leading-tight">
                        Source Code
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
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

// NavItem Component
interface NavItemProps {
  href: string;
  icon: JSX.Element;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, text }) => (
  <a
    href={href}
    className="group flex items-center justify-start p-2 rounded-full transition-all transform hover:scale-95 hover:bg-[#fd8439] hover:opacity-80"
  >
    <div className="bg-white p-2 rounded-full inline-flex items-center justify-center">
      <span className="text-[#fd8439]">{icon}</span>
    </div>
    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">
      {text}
    </span>
  </a>
);

// SocialLink Component
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
