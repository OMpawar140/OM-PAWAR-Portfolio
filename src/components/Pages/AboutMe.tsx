// src/components/Pages/AboutMe.tsx
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const AboutMe: React.FC = () => {
  const infoBlocks = [
    {
      title: "👨‍💻 Who I Am",
      content:
        "Final-year B.Tech student in Information Technology & Services, specializing in AI-driven Full-Stack Development. Passionate about building impactful digital experiences.",
    },
    {
      title: "🛠️ Skills & Expertise",
      content:
        "Proficient in React, Node.js, PostgreSQL, MySQL, and AWS. Experienced in delivering scalable web and cloud-based solutions.",
    },
    {
      title: "🚀 What Drives Me",
      content:
        "I thrive on solving complex problems with clean, efficient code and creating applications that prioritize user experience.",
    },
    {
      title: "🎯 Future Goals",
      content:
        "Eager to take on roles in software engineering, AI, and cloud application development, contributing to innovative projects worldwide.",
    },
  ];

  return (
    <div className="h-full w-full flex flex-col p-2 sm:p-4">
      {/* Header */}
      <p className="text-gray-400 text-xs sm:text-sm">My Self</p>
      <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-1">
        Om Pawar
      </h1>

      {/* Responsive Scrollable Content */}
      <ScrollArea
        className="
          mt-4 sm:mt-6 lg:mt-8
          flex-1
          rounded-md border border-gray-800
          max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[65vh]
        "
      >
        <div className="p-3 sm:p-4 space-y-4">
          {infoBlocks.map((block, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 border border-gray-700 rounded-lg bg-black/20 backdrop-blur-md hover:border-gray-500 transition-colors"
            >
              <h2 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1">
                {block.title}
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                {block.content}
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default AboutMe;
