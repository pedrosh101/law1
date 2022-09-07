import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "./Slide.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Pagination, A11y, Autoplay]);

const data = [
  {
    id: 1,
    username: "Fandango",
    testimonial: "this is my story",
    img: "../img/adv1.jpg",
  },
  {
    id: 2,
    username: "Tom",
    testimonial: "this is my party",
    img: "../img/adv2.jpg",
  },
  {
    id: 3,
    username: "Lili",
    testimonial: "this is my time",
    img: "../img/adv3.jpg",
  },
  {
    id: 4,
    username: "Hulk",
    testimonial: "this is my second job",
    img: "../img/adv4.jpg",
  },
];

function Slides() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper"
      >
        {data.map((user) => (
          <SwiperSlide key={user.id} className="slide">
            <div className="slideContent">
              <div className="userImg">
                <img src={user.img} alt={user.username} className="userPhoto" />
              </div>
              <h5>{user.username}</h5>
              <h5>"{user.testimonial}"</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slides;
