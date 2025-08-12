/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/Layout/MainLayout.tsx
import React, { useRef } from "react";
import ProfileCard from "@/components/Profile/ProfileCard";
import RightMenu from "./RightMenu";
// import BottomArrow from "./BottomArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";

import AboutMe from "../Pages/AboutMe";
import Projects from "../Pages/Projects";
// import Contact from "../Pages/Contact";
import CodingProfiles from "../Pages/CodingProfiles";

const MainLayout: React.FC = () => {
  const swiperRef = useRef<any>(null);

  // const handleNext = () => {
  //   if (!swiperRef.current) return;
  //   const swiper = swiperRef.current;
  //   if (swiper.isEnd) swiper.slideTo(0);
  //   else swiper.slideNext();
  // };

  const handleNavigate = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-stone-900">
      {/* Left Profile Card */}
      <div className="bg-[#2F2F2F] rounded-[30px] p-8 w-[320px] flex flex-col items-center shadow-lg">
        <ProfileCard />
      </div>

      {/* Right Swiper Section */}
      <div className="bg-[#2F2F2F] rounded-[30px] p-8 w-[600px] h-[520px] ml-8 shadow-lg flex items-center justify-center">
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
          {/* <SwiperSlide>
            <Contact />
          </SwiperSlide> */}
        </Swiper>
      </div>

      {/* Right Vertical Menu */}
      <RightMenu onNavigate={handleNavigate} />

      {/* Bottom Arrow */}
      {/* <BottomArrow onClick={handleNext} /> */}
    </div>
  );
};

export default MainLayout;
