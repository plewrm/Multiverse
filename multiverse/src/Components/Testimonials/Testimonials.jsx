import React, { useRef } from 'react'
import './Testimonials.css'
import Arrowback from '../../assets/arrow_back_white.svg'
import Arrownext from '../../assets/arrow_next_white.svg'
import Slide1 from '../../assets/cmp1.jpg'
import Slide2 from '../../assets/cmp11.jpg'
import Slide3 from '../../assets/cmp12.jpg'
import Slide4 from '../../assets/cmp14.jpg'
const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


    const forwardSlide = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

    const backwardSlide = () => {
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <div className='testimonials'>
            <img src={Arrowback} alt='' className='back-btn' onClick={backwardSlide} />
            <img src={Arrownext} alt='' className='next-btn' onClick={forwardSlide} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={Slide1} alt='' className='sld-img' />
                                <div>
                                    <h3>Henrry Kelvin</h3>
                                    <sapn>California, U.S</sapn>
                                </div>
                            </div>
                            <p>California is a state in the Western United States, lying on the American Pacific Coast.
                                It borders Oregon to the north, Nevada and Arizona to the east, and an international border
                                with the Mexican state of Baja California to the south. With 39 million residents[6]
                                across an area of 163,696 square miles (423,970 km2),[11] it is the most populous U.S. state.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={Slide2} alt='' className='sld-img' />
                                <div>
                                    <h3>Robert Bumsted</h3>
                                    <sapn>California, U.S</sapn>
                                </div>
                            </div>
                            <p>California is a state in the Western United States, lying on the American Pacific Coast.
                                It borders Oregon to the north, Nevada and Arizona to the east, and an international border
                                with the Mexican state of Baja California to the south. With 39 million residents[6]
                                across an area of 163,696 square miles (423,970 km2),[11] it is the most populous U.S. state.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={Slide3} alt='' className='sld-img' />
                                <div>
                                    <h3>Mark Downson</h3>
                                    <sapn>California, U.S</sapn>
                                </div>
                            </div>
                            <p>California is a state in the Western United States, lying on the American Pacific Coast.
                                It borders Oregon to the north, Nevada and Arizona to the east, and an international border
                                with the Mexican state of Baja California to the south. With 39 million residents[6]
                                across an area of 163,696 square miles (423,970 km2),[11] it is the most populous U.S. state.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={Slide4} alt='' className='sld-img' />
                                <div>
                                    <h3>James Wisdom</h3>
                                    <sapn>California, U.S</sapn>
                                </div>
                            </div>
                            <p>California is a state in the Western United States, lying on the American Pacific Coast.
                                It borders Oregon to the north, Nevada and Arizona to the east, and an international border
                                with the Mexican state of Baja California to the south. With 39 million residents[6]
                                across an area of 163,696 square miles (423,970 km2),[11] it is the most populous U.S. state.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
