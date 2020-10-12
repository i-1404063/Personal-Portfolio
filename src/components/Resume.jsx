import React from "react";
import { languages, tools } from "../assets/language";
import Bar from "./Bar";
import { motion } from "framer-motion";

const Resume = () => {
  const resume__variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.6 },
    },
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="container resume"
      variants={resume__variant}
      initial="hidden"
      animate="visible"
      exit="exit">
      <div className="row">
        <div className="col-lg-6 resume__card">
          <h4 className="resume__card__heading">Education</h4>
          <div className="resume__card__body">
            <h5 className="resume__card__title">
              Computer Science & Engineering
            </h5>
            <p className="resume__card__name">
              Chittagong University of Engineering & Technology(CUET)
            </p>
            <p className="resume__card__details">class of B.SC 2015 - 2019</p>
          </div>
        </div>
        <div className="col-lg-6 resume__card">
          <h4 className="resume__card__heading">Experience</h4>
          <div className="resume__card__body">
            <h5 className="resume__card__title">
              Developer
            </h5>
            <p className="resume__card__name">
              Present
            </p>
            <p className="resume__card__details">Currently working as a freelance Web Developer.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume__language">
          <h5 className="resume__language__heading">Language & Frameworks</h5>
          <div className="resume__language__body mt-3">
            {languages.map((language, index) => (
              <Bar value={language} key={index} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume__language">
          <h5 className="resume__language__heading">Tools & Softwares</h5>
          <div className="resume__language__body mt-3">
            {tools.map((tool, index) => (
              <Bar value={tool} key={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;