import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const AboutMe: React.FC = () => {
  const infoBlocks = [
    {
      title: "👨‍💻 Who I Am",
      content:
        "Final-year B.Tech student in Computer Science and Engineering, specializing in AI-driven Full-Stack Development. Passionate about building impactful digital experiences.",
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
    <div className="h-full w-full overflow-hidden">
      <div className="flex flex-col h-full p-2 sm:p-4">
        {/* Header */}
        <div className="flex-shrink-0">
          <p className="text-gray-400 text-xs sm:text-sm">My Self</p>
          <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-1">
            Om Pawar
          </h1>
        </div>

        {/* Intro / Summary */}
        <div className="flex-shrink-0 mt-2 sm:mt-3">
          <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
            A passionate developer with strong skills in full-stack development and AI-driven solutions.
          </p>
        </div>

        {/* Scrollable Section */}
        <div className="flex-1 mt-3 sm:mt-4 min-h-0">
          <ScrollArea className="h-full pr-2">
            <div className="flex flex-col gap-3 sm:gap-4 pb-4">
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
      </div>
    </div>
  );
};

export default AboutMe;
