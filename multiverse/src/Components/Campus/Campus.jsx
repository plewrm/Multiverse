import React from 'react'
import './Campus.css'
import Campa1 from '../../assets/cmp11.jpg'
import Campa2 from '../../assets/cmp2.jpg'
import Campa3 from '../../assets/cmp8.jpg'
import Campa4 from '../../assets/cmp5.jpg'
import Arrownext from '../../assets/arrow_next_white.svg'
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={Campa1} alt=''/>
            <img src={Campa2} alt=''/>
            <img src={Campa3} alt=''/>
            <img src={Campa4} alt=''/>
        </div>
        <button className='btn dark-btn'>See more <img src={Arrownext} alt=''/></button>
    </div>
  )
}

export default Campus
