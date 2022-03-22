import React from "react";
import "./hackatons.css";
import { hackatons } from "../data";

import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Hackatons = () => {
  return (
    <section id="hackatons">
      <h5>Where I participate</h5>
      <h2>Hackatons</h2>

      <Swiper
        className="container hackatons-container"
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation={{ clickable: true }}
      >
        {hackatons.map(({ img, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="hackaton">
              <div className="hackaton-image">
                <img src={img} alt="img" />
              </div>
              <h5 className="hackaton-name">{name}</h5>
              <small className="hackaton-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Hackatons;
