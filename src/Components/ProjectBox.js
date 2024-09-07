import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    TopCoursesDesc : "Using API I have built an attractive website which fetch the top courses of a particular educational website I have applied various filter on it using which one can access courses of particular domain Technologies used- React.js, Tailwind",
    TopCoursesGithub : "https://github.com/Sktiwary9122/Top-courses.git",
    TopCoursesWebsite : "https://top-courses-byme.netlify.app",

    RandomGifGeneratorDesc: "This is a Random gif generator website which is built on th e api provided by GIPHY an gif company. This project is built with React, HTML and tailwind. This is a fun to explore webite",
    RandomGifGeneratorGithub : "https://github.com/Sktiwary9122/Random-gif.git",
    RandomGifGeneratorWebsite : "https://gif-generator-byme.netlify.app",

    WeatherDetailsDesc:"Using the free API available on the internet I made an weather app which has a beautiful interface one can view the weather details of their current location also they can search weather details of any city accross the globe.Technologies used- HTML, CSS, JAVASCRIPT",
    WeatherDetailsGithub:"https://github.com/Sktiwary9122/weather-app.git",
    WeatherDetailsWebsite:"https://weather-detail-byme.netlify.app",
    
    passwordGeneratorDesc:"An password generator app whhich you can use to create password it also states the difficulty level of the password generated. It gives the user flexibility of choosing what things to include in your password.",
    passwordGeneratorGithub:"https://github.com/Sktiwary9122/Password-generator.git",
    passwordGeneratorWebsite:"https://password-generator-byme.netlify.app",

    blogwebsiteDesc:"This is an blog website where one can read blogs published by different person accross the globe. One can read blogs of certain tags or by certain users. Though this website is built on a dummy api which has different fake blogs on it. But it works completely fine",
    blogwebsiteGithub:"",
    blogwebsiteWebsite:"https://blog-website-byme.netlify.app",

    vnoteDesc:"V-Note is made using python libraries like Media-pipe and Open cv	It is a hand gesture-controlled note taking app. which help the users to get rid of the traditional pen and paper system or even the digital pen system This was a group project which was made in an 24 hours long hackathon",
    vnoteGithub:"https://github.com/Sktiwary9122/HacknWin-slytherin-T-55-.git",
    vnoteWebsite:"",
  }

  let show ='';
  let hide ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
  if(desc[projectName + 'Website']===""){
    hide="none";
  }

    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            <div className='projectDesc'>
              {desc[projectName + 'Desc']}
            </div>
            
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a style={{display:hide}} href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Live Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox