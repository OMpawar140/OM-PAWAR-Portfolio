// src/components/Pages/AboutMe.tsx
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full text-left">
      <p className="text-gray-400 text-sm">Web Developer</p>
      <h1 className="text-white text-3xl font-bold">Om Pawar</h1>
      <p className="text-gray-300 mt-6 leading-relaxed">
 I am a Final-year B.Tech student in Information Technology & Services, specializing in <strong>AI-driven Full-Stack Development</strong>. I am skilled in <strong>React</strong>, <strong>Node.js</strong>, <strong>PostgreSQL</strong>, <strong>MySQL</strong>, and <strong>AWS</strong>, with experience delivering scalable web and cloud solutions. I am passionate about solving complex problems through clean, efficient code and creating user-focused applications. I am open to roles in software engineering, AI, and cloud application development.
        </p>
      <div className="flex gap-4 mt-6">
      </div>
    </div>
  );
};

export default AboutMe;
