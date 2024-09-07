import React from 'react';
import ProjectBox from './ProjectBox';
import image from '../images/image.png'
import topcourses from '../images/top-courses.png'
import weather from '../images/weather.png'
import password from '../images/password.png'
import blog from '../images/blog.png'
import vnote from '../images/vnote.png'
import Tilt from 'react-parallax-tilt';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    adaptiveHeight: true
  };
  return (
    <div className='projectContainer'>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      {/* <div className='project'> */}
      <Slider className='project' {...settings}>
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={topcourses} projectName="TopCourses" />
          </Tilt>
        </div>       
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={weather} projectName="WeatherDetails" />
          </Tilt>
        </div>
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={vnote} projectName="vnote" />
          </Tilt>
        </div>
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={image} projectName="RandomGifGenerator" />
          </Tilt>
        </div>
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={password} projectName="passwordGenerator" />
          </Tilt>
        </div>
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={blog} projectName="blogwebsite" />
          </Tilt>
        </div>

        </Slider>
      </div>

    // </div>
  )
}

export default Projects