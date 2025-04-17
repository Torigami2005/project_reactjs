import React, { useRef } from 'react'
import './Comments.css'
import { TbPlayerSkipBack } from "react-icons/tb";
import { RxTrackNext } from "react-icons/rx";
import user_1 from '../../assets/user_1.jpg'
import user_2 from '../../assets/user_2.jpg'
import user_3 from '../../assets/user_3.jpg'
import user_4 from '../../assets/user_4.jpg'


const Comments = () => {

    const slider = useRef();
    let tx = 0;


    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
 <div className='comments'>
    <button className='next-btn' onClick={slideForward}><RxTrackNext/></button>
    <button className='back-btn' onClick={slideBackward}><TbPlayerSkipBack/></button>
    <div className="slider">
        <ul ref={slider}>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <h3>Bernarose A. Villegas</h3>
                        <span>1st Year BS Computer Science</span>
                        <p>Echoes does not only deliver music but also connects with people when performing.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <h3>Name, Surname</h3>
                        <span>2nd Year BS Information Technology</span>
                        <p>comments test</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <h3>Name, Surname</h3>
                        <span>4th Year Information Technology</span>
                        <p>comments test</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <h3>Name, Surname</h3>
                        <span>Course/Program</span>
                        <p>comments test</p>
                    </div>
                </div>
            </li> 
        </ul>
    </div>
 </div>
  )
}

export default Comments