import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We ensure that better education for a better world</h1>
                <p>Ensure the Image Path is Correct: Make sure that the relative path to the image is correct.
                    This can sometimes be tricky with create-react-app or other build tools because of the way they handle asset paths.
                </p>
                <button className='btn'>Explore More <img src='/arrow_next.svg' alt=''/></button>
            </div>
        </div>
    );
};

export default Hero;
