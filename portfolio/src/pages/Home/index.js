import React from 'react'
import './style.css'
import { BsGithub, BsLinkedin, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';
import { BiLogoGoogle, BiLogoFacebook } from 'react-icons/bi';

function Home() {
  return (
    <>
      <div className='intro-container' >
        <div>
          <div>
            <h1 className='username' >Kumar Pranjul</h1>
            <p className='social-user-name' >( pranjul56667)</p>
            <p className='description' >A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
            <br />
            <div className='social-links' >
            <BsGithub/>
            <BsLinkedin/>
            <BsYoutube/>
            <BiLogoGoogle/>
            <BsTwitter/>
            <BiLogoFacebook/>
            <BsInstagram/>
            </div>
          </div>
        </div>
        <div>
          <img src="https://www.umershaikh.tech/images/banner.png" alt="profile" width='700rem' height='400rem'/>
        </div>
      </div>
      <br />
      <br />  
      <br />  
      <hr className='hr-tag' />
    </>
  )
}

export default Home