import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'
import { FaCirclePlay } from "react-icons/fa6";
const About = ({setPlayState}) => {

  const handlePlay = () => {
    setPlayState(true);
  }

  return (
    <div className='about' >
        <div className="about-left">
            <img src={about} alt="" className='about-img' />
            <h1 className='play-icon' onClick={handlePlay}><FaCirclePlay/></h1>
        </div>
        <div className="about-right">
            <h3>ABOUT ECHOES</h3>
            <h2>WHAT IS ECHOES?</h2>
            <p>Echoes is the official music sub-committee of the Ateneo de Davao University Computer Studies Talents (AdDU CS Talents). 
                Born from a shared passion for music within the tech community, 
                Echoes is where rhythm meets code — a space where voices, instruments, and creativity resonate beyond the digital world.
                </p>
                <p>
                We provide a platform for musically inclined students from the Computer Studies cluster to express themselves, collaborate with fellow artists, and perform in events both within and beyond the university. 
                Whether you’re a seasoned musician or someone just starting to explore your musical side, Echoes welcomes you to make your sound heard.
                </p>
                <p>
                Our mission is to celebrate the talent and diversity 
                of our members through music, foster 
                camaraderie through performance, 
                and contribute to the dynamic culture of AdDU CS Talents — one note at a time.   
                </p>
        </div>
    </div>
  )
}

export default About