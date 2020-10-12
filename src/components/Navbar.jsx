import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = props => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.endsWith("/")) setActive("About");
    else if (currentUrl.endsWith("/about")) setActive("About");
    else if (currentUrl.endsWith("/resume")) setActive("Resume");
    else if (currentUrl.endsWith("/projects")) setActive("Projects");
  }, [active]);

  const navbar__variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: { delay: 0.2, duration: 0.7, type: "spring" },
    },
  };

  return (
    <motion.div
      className="navbar"
      variants={navbar__variant}
      initial="hidden"
      animate="visible">
      <div className="navbar__active">{active}</div>
      <div className="navbar__items">
        {active !== "About" && (
          <Link
            to="/"
            className="navbar__item"
            onClick={() => setActive("About")}>
            About
          </Link>
        )}
        {active !== "Resume" && (
          <Link
            to="/resume"
            className="navbar__item"
            onClick={() => setActive("Resume")}>
            Resume
          </Link>
        )}
        {active !== "Projects" && (
          <Link
            to="/projects"
            className="navbar__item"
            onClick={() => setActive("Projects")}>
            Projects
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
