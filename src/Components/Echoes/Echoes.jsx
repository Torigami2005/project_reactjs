import React from 'react'
import './Echoes.css'
import gallery_1 from '../../assets/gallery_1.jpg'
import gallery_2 from '../../assets/gallery_2.jpg'
import gallery_3 from '../../assets/gallery_3.jpg'
import gallery_4 from '../../assets/gallery_4.jpg'
// import gallery_5 from '../../assets/gallery_5.jpg'
// import gallery_6 from '../../assets/gallery_6.jpg'
// import gallery_7 from '../../assets/gallery_7.jpg'
// import gallery_8 from '../../assets/gallery_8.jpg'
import { TbPlayerTrackNext } from "react-icons/tb";

const Echoes = () => {
  return (
    <div className='echoes'>
        <div className="highlights">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" /> 
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
            {/* <img src={gallery_5} alt="" />
            <img src={gallery_6} alt="" />
            <img src={gallery_7} alt="" />
            <img src={gallery_8} alt="" /> */}
         </div>
        <button className='btn dark-btn'>See more here <TbPlayerTrackNext /></button>
    </div>
  )
}

export default Echoes