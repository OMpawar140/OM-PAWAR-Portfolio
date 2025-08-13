// src/components/Layout/RightMenu.tsx
import React, { useState } from "react";
import { User, Projector, Code  } from "lucide-react";

interface Props {
  onNavigate: (index: number) => void;
}

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

const RightMenu: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="hidden lg:flex flex-col items-center gap-4 xl:gap-6 fixed top-1/2 right-4 xl:right-6 -translate-y-1/2 bg-[#2F2F2F] p-3 xl:p-4 rounded-full shadow-lg z-20">
       <Tooltip content="About Me">
         <User 
           className="text-white hover:text-[#00AEEF] cursor-pointer w-5 h-5 xl:w-6 xl:h-6 transition-colors" 
           onClick={() => onNavigate(0)} 
         />
       </Tooltip>
       
       <Tooltip content="Projects">
         <Projector 
           className="text-white hover:text-[#00AEEF] cursor-pointer w-5 h-5 xl:w-6 xl:h-6 transition-colors" 
           onClick={() => onNavigate(1)} 
         />
       </Tooltip>
        
       <Tooltip content="Coding Profiles">
         <Code 
           className="text-white hover:text-[#00AEEF] cursor-pointer w-5 h-5 xl:w-6 xl:h-6 transition-colors" 
           onClick={() => onNavigate(2)} 
         />
       </Tooltip>
    </div>
  );
};

export default RightMenu;