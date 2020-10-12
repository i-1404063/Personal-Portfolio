import React from "react";

const SkillCard = ({ skill: { icon, title, about } }) => {
  return (
    <div className="col-lg-6">
      <div className="skill__card">
        <img src={icon} alt="icon" className="skill__card__icon" />
        <div className="skill__card__body">
          <h6 className="skill__card__title">{title}</h6>
          <p className="skill__card__content">{about}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
