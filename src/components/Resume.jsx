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
              B.Sc in Computer Science & Engineering
            </h5>
            <p className="resume__card__name">
              Chittagong University of Engineering & Technology(CUET)
            </p>
            <p className="resume__card__details">class of B.Sc 2015 - 2019</p>
          </div>
        </div>
        <div className="col-lg-6 resume__card">
          <h4 className="resume__card__heading">Experience</h4>
          <div className="resume__card__body">
            <div>
              <h5 className="resume__card__title">
                Jr. Software Engineer
         </h5>
              <p>Bhalogari.com</p>
              <p className="resume__card__name">
                March 2021 - Present
           </p>
            </div>
            <div>
              <h5 className="resume__card__title">
                Full Stack Software Developer
              </h5>
              <p>GridStacks</p>
              <p className="resume__card__name">January 2021 - February 2021</p>
            </div>
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
