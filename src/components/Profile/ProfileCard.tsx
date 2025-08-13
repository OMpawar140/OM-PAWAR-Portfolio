// src/components/Profile/ProfileCard.tsx

import React, { useState } from "react";
import { Github, Linkedin, Code, X, Download } from "lucide-react";
import MyPhoto from "@/assets/om pawar photo.png";
import CoverLetterPDF from "@/assets/OM_PAWAR_COVER_LETTER.pdf";

// Tooltip Component
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

// PDF Modal Component
interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

const PDFModal: React.FC<PDFModalProps> = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#2F2F2F] rounded-lg w-full h-full max-w-6xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-600 flex-shrink-0">
          <h3 className="text-base sm:text-lg font-semibold text-white">Cover Letter</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition-colors p-1"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
        
        {/* PDF Viewer */}
        <div className="flex-1 p-4 min-h-0">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full h-full border border-gray-500 rounded"
            title="PDF Preview"
          />
        </div>
      </div>
    </div>
  );
};

const ProfileCard: React.FC = () => {
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);

  const handleDownloadCV = () => {
    setIsPDFModalOpen(true);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-between space-y-4 sm:space-y-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center space-y-2 sm:space-y-3">
          <img
            src={MyPhoto}
            alt="Profile"
            className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 border-2 sm:border-3 border-[#00AEEF] hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center">Om Pawar</h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg text-center">Web Developer</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 sm:gap-4">
          <a
            href="https://github.com/OMpawar140/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00AEEF] transition-colors p-2"
          >
            <Tooltip content="Github">
              <Github size={18} className="sm:w-5 sm:h-5" />
            </Tooltip>
          </a>
          <a
            href="https://www.linkedin.com/in/om-pawar-68b086270/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00AEEF] transition-colors p-2"
          >
            <Tooltip content="Linkedin">
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </Tooltip>
          </a>
          <a
            href="https://leetcode.com/u/retreat_caliber/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00AEEF] transition-colors p-2"
          >
            <Tooltip content="LeetCode">
              <Code size={18} className="sm:w-5 sm:h-5" />
            </Tooltip>
          </a>
        </div>

        {/* CV Button */}
        <div className="w-full max-w-xs">
          <button 
            onClick={handleDownloadCV}
            className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#00AEEF] text-white text-sm sm:text-base md:text-lg font-semibold rounded-full hover:bg-[#0099d4] transition-colors"
          >
            <Download size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            Download CV
          </button>
        </div>
      </div>

      {/* PDF Modal */}
      <PDFModal 
        isOpen={isPDFModalOpen} 
        onClose={() => setIsPDFModalOpen(false)} 
        pdfUrl={CoverLetterPDF}
      />
    </>
  );
};

export default ProfileCard;