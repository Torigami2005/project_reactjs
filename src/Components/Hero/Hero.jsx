import React from 'react'
import './Hero.css'
import { FaArrowRightLong } from "react-icons/fa6";
import video_loop from '../../assets/Echoes_LED.mp4'

const Hero = () => {
  return (
    <div className='hero container'>
      <video className='hero-video' autoPlay loop muted>
        <source src={video_loop} type="video/mp4"/>
      </video>
      <div className="hero-text">
        <h2>ᴇᴄʜᴏᴇꜱ ᴏꜰ ᴛʜᴇ ᴘᴀꜱᴛ, ᴠɪʙʀᴀᴛɪᴏɴꜱ ᴏꜰ ᴛʜᴇ ꜰᴜᴛᴜʀᴇ</h2>
        <p>Echoes is a group band and a subcommittee of the AdDU CS Talents.
          We are a group of students who share the same passion for music and performing
          We aim to showcase our talents and skills through music and performance.</p>
        <button className='btn'>Explore more <FaArrowRightLong /></button>
      </div>
    </div>
  )
}

export default Hero