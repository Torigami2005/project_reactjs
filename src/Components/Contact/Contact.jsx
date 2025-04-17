import React from 'react'
import './Contact.css'
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aed52f5c-d55a-4f66-a990-6d33f7c4ab1b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <h2><FaRegMessage /></h2></h3>
            <p>Feel free to reach out through our email below. Your feedback, questions, 
                and suggestions are importnt  to us as we have the passion to perform 
                inside and outside the campus.</p>
        <   ul>
                <li><h2><BiLogoGmail size={30}/></h2>adducs.echoes@gmail.com </li>
                <li><h2><FaFacebook size={30}/></h2><a href='https://www.facebook.com/echoesfromcs' className='hover'>Echoes Facebook Page</a></li>
                <li><h2><IoSchool size={30}/></h2>Ateneo de Davao University, Roxas St. Jacinto Campus, Davao City, 8000</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number (optional)'/>
                <label>Write your messages here</label>
                 <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
                <button type='submit' className='btn dark-btn'>Send Message <h1><FaArrowRight /></h1></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
)
}

export default Contact