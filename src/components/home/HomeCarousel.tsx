import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const images = [
  "/home-1.jpg",
  "/home-2.jpg",
  "/home-3.jpg",
  "/home-4.jpg",
  "/home-5.jpg",
  "/home-6.jpg",
];

const HomeCarousel = () => {
  return (
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
      {images.map((src, index) => (
        <SwiperSlide key={index} className="carousel-slide">
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="carousel-image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCarousel;
