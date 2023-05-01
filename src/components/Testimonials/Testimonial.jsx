import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/client3.png";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "We had the pleasure of working with Dat on a complex web development project and were blown away by their technical expertise and professionalism.",
    },
    {
      img: profilePic2,
      review:
        "I have worked with several web developers in the past, but Dat stands out from the rest.",
    },
    {
      img: profilePic3,
      review:
        "We hired Dat to redesign our website, and the end result was beyond our wildest dreams. They were able to take our outdated website and turn it into a modern, responsive masterpiece.",
    },
    {
      img: profilePic4,
      review:
        "From start to finish, Dat was a pleasure to work with. They were able to take our vague ideas and turn them into a beautiful, functional website that exceeded our expectations",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
