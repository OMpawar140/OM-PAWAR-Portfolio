/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Layout/MainLayout.tsx
import React, { useRef, useState } from "react";
import ProfileCard from "@/components/Profile/ProfileCard";
import RightMenu from "./RightMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import {Button} from "@/components/ui/button"
import AboutMe from "../Pages/AboutMe";
import Projects from "../Pages/Projects";
import CodingProfiles from "../Pages/CodingProfiles";
import { Projector } from "lucide-react";


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

const MainLayout: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const handleNavigate = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className="relative min-h-screen w-full bg-stone-900 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
        
        {/* Profile Card Section */}
        <div className="w-full max-w-sm lg:max-w-none lg:w-80 xl:w-96">
          <div className="bg-[#2F2F2F] rounded-[20px] md:rounded-[30px] p-6 md:p-8 shadow-lg">
            <ProfileCard />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="w-full lg:flex-1 lg:max-w-2xl xl:max-w-3xl">
          <div className="bg-[#2F2F2F] rounded-[20px] md:rounded-[30px] p-4 md:p-6 lg:p-8 shadow-lg">
            <div className="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[520px]">
              <Swiper
                modules={[EffectCube]}
                effect="cube"
                grabCursor
                cubeEffect={{
                  shadow: false,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="w-full h-full"
              >
                <SwiperSlide>
                  <AboutMe />
                </SwiperSlide>
                <SwiperSlide>
                  <Projects />
                </SwiperSlide>
                <SwiperSlide>
                  <CodingProfiles />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Right Menu - Desktop Only */}
      <RightMenu onNavigate={handleNavigate} />

      {/* Bottom Navigation - Mobile Only */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden">
        <div className="flex items-center gap-6 bg-[#2F2F2F] px-6 py-3 rounded-full shadow-lg z-20">
          
          <Tooltip content="About Me">
          <Button 
            onClick={() => handleNavigate(0)}
            className="text-white hover:text-[#00AEEF] p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </Button>
          </Tooltip>

          <Tooltip content="Projects">
          <Button 
            onClick={() => handleNavigate(1)}
            className="text-white hover:text-[#00AEEF] p-2 transition-colors"
          >
           <Projector/>
          </Button>
          </Tooltip>

          <Tooltip content="Coding Profiles">
          <Button 
            onClick={() => handleNavigate(2)}
            className="text-white hover:text-[#00AEEF] p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z"/>
            </svg>
          </Button>
          </Tooltip>
          
        </div>
      </div>
    </div>
  );
};

export default MainLayout;