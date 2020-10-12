import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "../assets/skill";
import { motion } from "framer-motion";

const About = props => {
  const about__variant = {
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
      className="about"
      variants={about__variant}
      initial="hidden"
      animate="visible"
      exit="exit">
      <h6 className="about__intro">
        I am a freelance web developer. I have more than six months hands on experience of different web technology.
      </h6>
      <div className="container about__container">
        <h5 className="about__heading">What I Offer</h5>
        <div className="row">
          {skills.map((skill, index) => (
            <SkillCard skill={skill} key={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
