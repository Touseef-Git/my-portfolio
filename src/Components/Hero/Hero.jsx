import React from 'react'
import './Hero.css'
import profile_img2 from '../../assets/profile_img2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img2} alt="" />
      <h1><span>I&apos;m Muhammad Tauseef,</span> frontend developer based in Pakistan.</h1>
      <p>I am a frontend React.js developer skilled in creating responsive and dynamic web applications. Passionate about clean code and innovative user experiences.</p>
      <div className="hero-action">
      <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      <div className="hero-resume">My resume</div>
      </div>
      
    </div>
  )
}

export default Hero