import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <h4>Build with <span> <FaHeart/></span> by Shudhanshu Kumar Tiwari</h4>
      {/* <h4>Copyright &copy; 2023 DS</h4> */}
      <div className='footerLinks'>
        <a href="https://github.com/Sktiwary9122" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sktiwary9122" target='_blank'><FaLinkedin/></a>
        <a href="mailto:sktiwary9122@gmail.com">
      <GrMail />
    </a>
        <a href="https://leetcode.com/u/shudhanshu9122/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer