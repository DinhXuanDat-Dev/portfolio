import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
import Ktjp from "../../img/ktjp.png";
import Relvise from "../../img/relvise.png";
import Julyprint from "../../img/julyprint.png";
import Fashionshop from "../../img/fashionshop.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://ktjpglobal.com/" target="_blank">
            <img src={Ktjp} alt="" /> 
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://relvise-landing-page.netlify.app/" target="_blank">
            <img src={Relvise} alt="" />
          </a>
          
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://julyprint.com/" target="_blank">
            <img src={Julyprint} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://react-fashion-webshop.netlify.app/" target="_blank">
            <img src={Fashionshop} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
