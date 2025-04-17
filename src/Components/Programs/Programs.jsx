import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.jpg' 
import program_3 from '../../assets/program_3.jpg'
import { LuDrum } from "react-icons/lu";
import { TfiMicrophone } from "react-icons/tfi";
import { GiGuitar } from "react-icons/gi";

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <LuDrum size={60}/>
                <p>Performance Gigs</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <TfiMicrophone size={60}/>
                <p>School Events</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <GiGuitar size={60}/>
                <p>Own Music Videos</p>
            </div>
        </div>
    </div>
  )
}

export default Programs