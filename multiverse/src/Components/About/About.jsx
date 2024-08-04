import React from 'react'
import './About.css'
import Studentsvg from '../../assets/degreestudent.svg'
import Playbutton from '../../assets/playicon.png'
const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={Studentsvg} alt='' className='about-img'/>
                <img src={Playbutton} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>Strategy advisory</h3>
                <h2>business transformation for a leading marine logistics firm​</h2>
                <p>We are more than just a global consulting firm; we are your strategic partner on the path to success.</p>
                <p>Specializing in business transformation, technology consulting, digital transformation, product development,
                    startup advisory, and fundraising services.</p>
                <p>application modernization, and cyber security,
                    driving enterprise performance with a commitment to innovation and customer success.</p>
            </div>
        </div>
    )
}

export default About
