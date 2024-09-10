import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Shudhanshu Kumar Tiwari</b> and I am from Hazaribagh, India.
            I'm a <b>MERN stack web developer</b> and a College student pursuing <b>BTech in CSE</b>  from <b>CHANDIGARH UNIVERSITY</b> <br/><br/>
            {/* I have done an internship as a <b>software developer</b> at GoalFi which is a fintech startup. */}
            I am a MERN stack developer adept at crafting full-stack web applications using <b>MongoDB</b>, <b>Express.js</b>, <b>React</b>, and <b>Node.js</b>. I am Skilled in developing robust solutions, seamlessly integrating front-end user interfaces with back-end server logic and databases, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me through my <b>social media</b> links, in the footer or Just fill the <b>contact me form</b> and I will surely respond within <b>1 HOUR</b>.<br/>
            Apart from coding I love High Jumping, I have been awarded for the same at State level
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='w-[100%] sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[60%] flex flex-wrap justify-center mx-auto'>
        
          <Tilt>
          <Skills skill='React' classes='SkillBox1'/>
          </Tilt>
          <Tilt>
            <Skills skill='Node' classes='SkillBox1' />
          </Tilt>
          <Tilt>
            <Skills skill='Express' classes='SkillBox1' />
          </Tilt>
          <Tilt>
            <Skills skill='MongoDb' classes='SkillBox1'/>
          </Tilt>
          <Tilt>
            <Skills skill='Tailwind' classes='SkillBox1'/>
          </Tilt>
       
          <Tilt>
            <Skills skill='Git' classes='SkillBox2'/>
          </Tilt>
          <Tilt>
            <Skills skill='Github' classes='SkillBox2'/>
          </Tilt>
          <Tilt>
            <Skills skill='Javascript' classes='SkillBox2' />
          </Tilt>
          <Tilt>
            <Skills skill='C++' classes='SkillBox2' />
          </Tilt>
          <Tilt>
            <Skills skill='Java' classes='SkillBox2'/>
          </Tilt>
        <Tilt>
          <Skills skill='Python' classes='SkillBox3'/>
        </Tilt>
        <Tilt>
          <Skills skill='Html' classes='SkillBox3'/>
        </Tilt>
        <Tilt>
          <Skills skill='Css' classes='SkillBox3'/>
        </Tilt>
        <Tilt>
          <Skills skill='Postman' classes='SkillBox3'/>
        </Tilt>
        <Tilt>
          <Skills skill='Figma' classes='SkillBox3' />
        </Tilt>
        
        <Tilt>
          <Skills skill='ChakraUi' classes='SkillBox'/>
        </Tilt>
        <Tilt>
          <Skills skill='Netlify' classes='SkillBox'/>
        </Tilt>
        <Tilt>
          <Skills skill='Npm' classes='SkillBox' />
        </Tilt>
        <Tilt>
          <Skills skill='Bootstrap' classes='SkillBox'/>
        </Tilt>
       
      </div>
    </>
  )
}

export default About