
import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'

const App = () => {
  const [playState,setPlayState]=useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Program />
        <About setPlayState={setPlayState}/>
        <Title subTitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subTitle="Testimonials" title="What Student Says"/>
        <Testimonials/>
        <Title subTitle="Contact US" title="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
      <Video playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
