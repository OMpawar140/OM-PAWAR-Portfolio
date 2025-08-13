// src/components/Pages/Projects.tsx
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Info, ExternalLink } from "lucide-react";

// -------------------- Types --------------------
interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  images: string[];
  shortDescription: string;
  status: "launching-soon" | "live" | "in-development";
}

// -------------------- Data --------------------
const projectsData: Project[] = [
  {
    id: "talent-acquisition-system",
    name: "Talent Acquisition & Intelligent Recruitment System",
    description: "An AI-powered recruitment platform designed to streamline the hiring process by integrating Retrieval-Augmented Generation (RAG) for real-time skill-based candidate search and Generative AI for automated job description creation, personalized candidate communication, and interview question generation. The system supports resume parsing, semantic search, and ranking of applicants based on job requirements, improving hiring efficiency and reducing bias.",
    techStack: ["React.js", "Tailwind CSS", "ShadCN/UI", "Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "Pinecone", "OpenAI API", "LangChain", "AWS", "Docker"],
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
    ],
    shortDescription: "AI-Powered Recruitment with RAG",
    status: "launching-soon"
  },
  {
    id: "code-sharing-platform",
    name: "Real-Time Code Sharing & Collaboration Platform",
    description: "A secure, web-based platform designed for tutors and students to share code and directory structures in real-time, inspired by VS Code's file explorer view. The system allows tutors to grant viewing permissions dynamically, enabling students to see updated file trees and download or copy files without editing rights. It features session-based access control, anonymous/named doubt raising, and live folder updates without relying on chokidar, ensuring efficient and lightweight performance.",
    techStack: ["Vue.js", "BootStrap CSS", "Node.js", "Express", "MySQL", "AWS EC2", "Docker", "2FA Authentication"],
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
    ],
    shortDescription: "VS Code-style Collaboration Platform",
    status: "launching-soon"
  },
  {
    id: "project-tracking-system",
    name: "AI-Integrated Project Tracking & Management System",
    description: "A comprehensive platform for tracking, managing, and collaborating on projects in real time. Designed for distributed teams, it supports task assignment, milestone tracking, document sharing, and built-in video conferencing with screen sharing. The system features intelligent reminders, progress analytics, and AI-powered insights for predicting project delays and optimizing resource allocation. User authentication includes multi-factor security, and data is synchronized across devices for seamless team collaboration.",
    techStack: ["React.js", "Vite", "TypeScript", "Tailwind CSS", "ShadCN/UI", "Node.js", "Express", "WebSockets", "PostgreSQL", "OpenAI API", "AWS EC2", "Docker", "JWT", "MFA"],
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
    ],
    shortDescription: "AI-Powered Project Management",
    status: "launching-soon"
  },
  {
    id: "blooms-taxonomy-test-generator",
    name: "AI-Powered Bloom's Taxonomy Test Generator for Weak Learners",
    description: "An adaptive assessment platform designed for the MITAOE AI course to generate tests aligned with Bloom's Taxonomy levels — Remember, Understand, Apply, Analyze, Evaluate, and Create. The system uses AI to create personalized MCQs, direct-answer questions, and coding challenges based on each learner's weak areas, identified through performance tracking. It dynamically adjusts question difficulty and format to improve conceptual understanding and practical skills, ensuring a targeted learning experience for students.",
    techStack: ["React.js", "Tailwind CSS", "ShadCN/UI", "Python", "FastAPI", "Node.js", "Express", "PostgreSQL", "OpenAI API", "LangChain", "AWS EC2", "Docker", "JWT"],
    images: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop"
    ],
    shortDescription: "Adaptive Learning Assessment System",
    status: "launching-soon"
  },
  {
    id: "study-scheduler-optimizer",
    name: "Smart Study Scheduler & Productivity Optimizer",
    description: "An AI-driven scheduling platform that helps students and professionals plan their study or work sessions efficiently by analyzing their timetable, available hours, and productivity patterns. The system dynamically allocates topics based on priority, difficulty, and upcoming deadlines, while incorporating rest intervals and revision cycles for maximum retention. It also adapts plans in real-time based on missed sessions or updated priorities, ensuring consistent progress tracking.",
    techStack: ["React.js", "Tailwind CSS", "ShadCN/UI", "Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB", "OpenAI API", "AWS EC2", "Docker", "JWT"],
    images: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop"
    ],
    shortDescription: "AI-Driven Study Planning",
    status: "launching-soon"
  }
];

// -------------------- Project Card --------------------
interface ProjectCardProps {
  project: Project;
  onViewProject: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewProject }) => {
  return (
    <div
      className=" bg-black/20 p-3 rounded-lg cursor-pointer hover:bg-[#2A2A2A] transition-colors duration-200 w-full"
      onClick={() => onViewProject(project)}
    >
      <h3 className="text-white font-semibold text-sm leading-tight break-words whitespace-normal line-clamp-2 mb-2">
        {project.name}
      </h3>
      <p className="text-gray-400 text-xs mb-3 line-clamp-1">
        {project.shortDescription}
      </p>
      <div className="flex items-center justify-between">
        <span
          className={`text-xs px-2 py-1 rounded flex-shrink-0 ${
            project.status === "live"
              ? "bg-green-600 text-green-100"
              : project.status === "launching-soon"
              ? "bg-orange-600 text-orange-100"
              : "bg-blue-600 text-blue-100"
          }`}
        >
          {project.status.replace("-", " ")}
        </span>
        <Info className="w-3 h-3 text-gray-400 flex-shrink-0 ml-2" />
      </div>
    </div>
  );
};

// -------------------- Tooltip --------------------
interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded shadow-lg whitespace-nowrap z-10">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
        </div>
      )}
    </div>
  );
};

// -------------------- Project Dialog --------------------
interface ProjectDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl max-h-[90vh] sm:max-h-[80vh] bg-[#1A1A1A] border-gray-700 p-0 overflow-hidden mx-4 sm:mx-auto">
        <DialogHeader className="p-4 sm:p-6 pb-0">
          <DialogTitle className="text-white text-base sm:text-lg md:text-xl break-words pr-8">
            {project.name}
          </DialogTitle>
        </DialogHeader>

        {/* Responsive scrollable content */}
        <ScrollArea className="h-[calc(90vh-4rem)] sm:h-[calc(80vh-4rem)] px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-6 pb-6">
            {/* Carousel */}
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.name} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-[#2A2A2A] border-gray-600 text-white hover:bg-[#3A3A3A] left-2" />
              <CarouselNext className="bg-[#2A2A2A] border-gray-600 text-white hover:bg-[#3A3A3A] right-2" />
            </Carousel>

            {/* Description */}
            <div>
              <h3 className="text-white text-base sm:text-lg font-semibold mb-2">
                Description
              </h3>
              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-white text-base sm:text-lg font-semibold mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#2A2A2A] text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-end pt-4 mb-8">
              <Tooltip content="Coming Soon!">
                <Button
                  disabled={project.status !== "live"}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 sm:px-6 py-2 rounded-lg flex items-center gap-2 text-sm"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  View Project
                </Button>
              </Tooltip>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

// -------------------- Main Projects Component --------------------
const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="h-full w-full overflow-hidden">
        <div className="flex flex-col h-full p-2 sm:p-4">
          {/* Header */}
          <div className="flex-shrink-0">
            <p className="text-gray-400 text-xs sm:text-sm">My Work</p>
            <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-1">
              Projects
            </h1>
          </div>

          {/* Intro */}
          <div className="flex-shrink-0 mt-2 sm:mt-3">
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm line-clamp-3">
              I have worked on a variety of web applications, from small
              business websites to large-scale platforms. My focus is always on
              clean design and performance.
            </p>
          </div>

          {/* Scrollable project list */}
          <div className="flex-1 mt-3 sm:mt-4 min-h-0">
            <ScrollArea className="h-full max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[65vh] pr-2">
              <div className="flex flex-col gap-3 sm:gap-4 pb-4">
                {projectsData.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewProject={handleViewProject}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>

      {/* Project Dialog */}
      <ProjectDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </>
  );
};

export default Projects;
