import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./homeCarousel.scss";
import { Link } from "react-router-dom";
// import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules";
// import Button from "../button/Button";

const HomeCarousel = ({ carouselData }) => {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {carouselData.map((item, ind) => (
          <SwiperSlide key={ind}>
            <section className="swiper_content_section">
              <img src={item.img} alt="" />
              <section className="swiper_content">
                <h1 className="main_heading">{item.title}</h1>
                <p>{item.desc}</p>
                <Link className="link" title={"Read more"} to="/top-therapists">
                  Read more
                </Link>
              </section>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeCarousel;
