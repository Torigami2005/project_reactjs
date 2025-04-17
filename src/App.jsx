import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Echoes from './Components/Echoes/Echoes'
import Comments from './Components/Comments/Comments'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import {useState} from 'react'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <>
    <div>
    <Navbar />
    <Hero />
    <div className="container">
      <Title subTitle='ECHOES CS TALENTS' title='PROGRAMS FOR ECHOES'/>
      <Programs />
      <About setPlayState={setPlayState} />
      <Title subTitle='highlights' title='Echoes Performance Highlights'/>
      <Echoes/>
      <Title subTitle='Comments' title='What Chammies Says About Echoes'/>
      <Comments />
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
    </>
  )
}

export default App