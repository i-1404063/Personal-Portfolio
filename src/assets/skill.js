import React from 'react';
import api from "./icons/api.svg";
import frontend from './icons/frontend.jpg';
import backend from './icons/backend.svg';


export const skills = [
  {
    icon: frontend,
    title: "Frontend Development",
    about:
      ["I will build your eye-catching landing page with ", <strong key="1">HTML CSS & REACTJS</strong>]
  },
  {
    icon: backend,
    title: "Backend Development",
    about:
      ["I will create your backend using ", <strong key="2">NodeJs & Express</strong>, ". Managing data using ",<strong key="3">MongoDB & Sql</strong>],
  },
  {
    icon: api,
    title: "Api Development",
    about:
      ["I will create robust api for your site using ", <strong key="4">Node & Express</strong>],
  }
];
