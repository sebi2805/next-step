import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const people = [
  { src: "/person-1.jpg" },
  { src: "/person-2.jpg" },
  { src: "/person-3.jpg" },
  { src: "/person-4.jpg" },
  { src: "/person-5.jpg" },
  { src: "/person-6.jpg" },
];

const PersonCarousel = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center text-[#0f3b6a] mb-8 pt-[40px]">
        Întâlnește-ne echipa
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {people.map((person, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <img src={person.src} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PersonCarousel;
