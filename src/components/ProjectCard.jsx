import React from "react";
import github from "../assets/icons/github.svg";

const ProjectCard = ({
  project: { name, image, deployed_url, github_url },
}) => {
  return (
    <div className="project__card col-md-6 col-lg-4 my-2">
      <figure className="project__card__wrapper">
        <a href={deployed_url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={name} className="project__card__image" />
        </a>
        <div className="project__card__title">
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github-a" className="project__card__icon" />
            {name}
          </a>
        </div>
      </figure>
    </div>
  );
};

export default ProjectCard;
