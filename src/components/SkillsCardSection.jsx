
import SkillCard from './SkillCard';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import skills from './../../public/skills';


const SkillsCardSection = () => {
    return (
        <div>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className=""
      >
        {skills?.map((skill, index) => (
            <SwiperSlide key={index} className="!w-fit">
                <SkillCard
                logo={skill.icon}
                cardTitle={skill.title}
                CardText={skill.description}
                />
            </SwiperSlide>
        ))}
      </Swiper>
        </div>
    );
};

export default SkillsCardSection;