import React from "react";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

const Sidebar = props => {
  const handleEmail = () => {
    window.open("mailto:imonhasans33@gmail.com");
  };

  const sidebar__variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: "0",
      transition: { delay: 0.1, duration: 0.5, type: "spring" },
    },
  };

  return (
    <motion.div
      className="sidebar"
      variants={sidebar__variant}
      initial="hidden"
      animate="visible">
      <img
        src={require("../assets/my-photo.jpg")}
        alt="avatar"
        className="sidebar__avatar"
      />
      <div className="sidebar__name">
        Faruk <span>Ahamad</span>
      </div>
      <div className="sidebar__item sidebar__title">Software Engineer</div>
      <a href={resume} download="resume.pdf" className="link">
        <div className="sidebar__item sidebar__resume">
          <img
            src={require("../assets/icons/tie.svg")}
            alt="resume"
            className="sidebar__icon"
          />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="https://www.linkedin.com/in/faruk-ahamad-imon-99982610a/" className="link" target="_blank" rel="noopener noreferrer">
          <img
            src={require("../assets/icons/linkedin.png")}
            alt="linkedin"
            className="sidebar__icon mr-3"
          />
        </a>
        <a href="https://www.facebook.com/" className="link" target="_blank" rel="noopener noreferrer">
          <img
            src={require("../assets/icons/facebook.svg")}
            alt="facebook"
            className="sidebar__icon mr-3"
          />
        </a>
        <a href="!#" className="link" target="_blank" rel="noopener noreferrer">
          <img
            src={require("../assets/icons/instagram.svg")}
            alt="instagram"
            className="sidebar__icon"
          />
        </a>
      </figure>

      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="https://github.com/i-1404063" className="link" target="_blank" rel="noopener noreferrer">
            <img
              src={require("../assets/icons/github.svg")}
              alt=""
              className="sidebar__icon mr-2"
            />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img
            src={require("../assets/icons/pin.svg")}
            alt="location"
            className="sidebar__icon mr-2"
          />
          Shyamoly,Dhaka
        </div>
        <div className="sidebar__item">imonhasans33@gmail.com</div>
        <div className="sidebar__item">faruk.ahamad@jbbc.co.jp</div>
        <div className="sidebar__item">01983-832024</div>
      </div>
      <div onClick={handleEmail} className="sidebar__item sidebar__email">
        Email me
      </div>
    </motion.div>
  );
};

export default Sidebar;
