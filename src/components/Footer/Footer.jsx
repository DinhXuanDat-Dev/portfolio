import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="mailto:datdinhxuan1602@gmail.com">datdinhxuan1602@gmail.com</a>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <a href="https://github.com/DinhXuanDat-Dev/" _rel="github" target="_blank" rel="noopener">
            <Gitub color="white" size={"3rem"} href="https://github.com/DinhXuanDat-Dev/"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
