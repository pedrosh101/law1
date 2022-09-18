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
    username: "Dr. Nome 1",
    testimonial: "Advogado - OAB/PS 19.590",
    img: "../img/adv1.jpg",
  },
  {
    id: 2,
    username: "Dra. Nome 2",
    testimonial: "Advogado - OAB/PS 19.470",
    img: "../img/adv2.jpg",
  },
  {
    id: 3,
    username: "Dr. Nome 3",
    testimonial: "Advogado - OAB/PS 19.000",
    img: "../img/adv3.jpg",
  },
  {
    id: 4,
    username: "Dr. Nome 4",
    testimonial: "Advogado - OAB/PS 25.190",
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
        className="swiper"
      >
        {data.map((user) => (
          <SwiperSlide key={user.id} className="slide">
            <div className="slideContent">
              <div className="userImg">
                <img src={user.img} alt={user.username} className="userPhoto" />
              </div>
              <h5 className="userName">{user.username}</h5>
              <h5 className="userText">"{user.testimonial}"</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slides;
