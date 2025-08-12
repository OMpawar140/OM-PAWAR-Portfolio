import React, { useState } from "react";
import { Github, Linkedin, Code, X, Download } from "lucide-react";
import MyPhoto from "@/assets/om pawar photo.png"

// Mock PDF URL - replace with your actual PDF path
const PDF_URL = "/src/assets/OM PAWAR COVER LETTER.pdf";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#2F2F2F] rounded-lg w-11/12 h-5/6 max-w-4xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-white">Cover Letter</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* PDF Viewer */}
        <div className="flex-1 p-4">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full h-full border border-gray-300 rounded"
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

  // const handlePreviewCV = () => {
  //   setIsPDFModalOpen(true);
  // };

  return (
    <>
      <div className="rounded-2xl p-8 w-80 h-[450px] flex flex-col items-center justify-between bg-">
        {/* Profile Image */}
        <div className="flex flex-col items-center space-y-3">
          <img
            src={MyPhoto}
            alt="Profile"
            className="rounded-full w-36 h-36 border-3 border-[#00AEEF] hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
          <h1 className="text-white text-3xl font-bold">Om Pawar</h1>
          <p className="text-gray-400 text-lg">Web Developer</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/OMpawar140/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00AEEF] transition-colors"
          >
            <Tooltip content="Github">
              <Github size={20} />
            </Tooltip>
          </a>
          <a
            href="https://www.linkedin.com/in/om-pawar-68b086270/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00AEEF] transition-colors"
          >
            <Tooltip content="Linkedin">
              <Linkedin size={20} />
            </Tooltip>
          </a>
          <a
            href="https://leetcode.com/u/retreat_caliber/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00AEEF] transition-colors"
          >
            <Tooltip content="LeetCode">
              <Code size={20} />
            </Tooltip>
          </a>
        </div>

        {/* CV Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <button 
            onClick={handleDownloadCV}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#00AEEF] text-white text-lg font-semibold rounded-full hover:bg-[#0099d4] transition-colors"
          >
            <Download size={18} />
            Download CV
          </button>
        </div>
      </div>

      {/* PDF Modal */}
      <PDFModal 
        isOpen={isPDFModalOpen} 
        onClose={() => setIsPDFModalOpen(false)} 
        pdfUrl={PDF_URL}
      />
    </>
  );
};

export default ProfileCard;