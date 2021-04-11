import React from 'react';
import api from "./icons/api.svg";
import frontend from './icons/frontend.jpg';
import backend from './icons/backend.svg';


export const skills = [
  {
    icon: frontend,
    title: "Frontend Development",
    about:
      ["I will build your eye-catching landing page with ", <strong key="1">HTML, CSS, BOOTSTRAP, MATERIAL-UI & REACTJS</strong>]
  },
  {
    icon: backend,
    title: "Backend Development",
    about:
      ["I will create your backend using ", <strong key="2">NODE JS & EXPRESS, GO, DJANGO, LARAVEL</strong>, ". Managing database using ", <strong key="3">MONGODB, MYSQL & POSTGRESQL</strong>],
  },
  {
    icon: api,
    title: "Api Development",
    about:
      ["I will create robust api for your site using ", <strong key="4">NODE, EXPRESS & GRAPHQL, GO, DJANGO, LARAVEL</strong>],
  }
];
