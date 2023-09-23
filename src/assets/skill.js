import React from 'react';
import api from "./icons/api.svg";
import frontend from './icons/frontend.jpg';
import backend from './icons/backend.svg';


export const skills = [
  {
    icon: frontend,
    title: "Frontend Development",
    about:
      [`I have worked on several production level projects including Gpweb, Gpshop, Bhalogari.com, Gpskillhub, Ogreem, Airastra etc.
        To build these projects i have worked with Reactjs, Nextjs, (angular for personal projects) as frontend framework and Context api and Redux for state management.
        I have vast knowledge about React's core concept like life-cycle hooks, Higher order component, custom-hooks, exception handling.
      `, 
      <strong key="1">HTML, CSS, BOOTSTRAP, MATERIAL-UI , AntD, Chakra-Ui, REACTJS, NEXTJS</strong>]
  },
  {
    icon: backend,
    title: "Backend & DevOps",
    about:
      [`I have language proficiencies in Javascript, Python, Java and Golang.
        I have worked all of the above languages backend framework.   
      `, <strong key="2">Javascript, Python, Java, Golang</strong>, ". I have worked on several databases and their recovery system ", <strong key="3">MONGODB, MYSQL , POSTGRESQL and REDIS.</strong>,
      `I have knowledge about `, <strong key="4">Nginx, Docker, AWS(EC2,S3,LAMBDA,CLOUD-FRONT,MEDIA-CONVERTER).</strong>, 
      ` I have deployed Python(odoo) using docker and proxying using Nginx, Deploying Reactjs application using Docker, serving static content using Nginx
      ,Load Balancing among servers using Nginx like nodejs server and cloud-front. I have knowledge about Api Rate-Limiting, Caching. I have deployed application using CI-CD pipeline like GITHUB-ACTIONS, data streaming from DB to S3 using APACHE-KAFKA. I have knowledge about systemd to run different server using process manager.`
    ]
  },
  {
    icon: api,
    title: "Api Development",
    about:
      ["I have experience developing api using REST-API, GRAPHQL(including subscription), WEB-SOCKET. I have worked in ", <strong key="5">Nodejs(Expresjs, Nestjs), Python(FastApi, Odoo), Golang(Gin), Java(Spring Boot)</strong>],
  }
];
