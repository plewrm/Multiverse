import React from 'react'
import './Program.css'
import Badge from '../../assets/badgeicon.png'
import Profile from '../../assets/profileicon.png'
import Book from '../../assets/bookicon.gif'
const Program = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src='/class_1.svg' alt='' />
                <div className="caption">
                    <img src={Badge} alt='' />
                    <p>Graduate Degree</p>
                </div>
            </div>

            <div className="program">
                <img src='/class_2.svg' alt='' />
                <div className="caption">
                    <img src={Profile} alt='' />
                    <p>Master Degree</p>
                </div>
            </div>

            <div className="program">
                <img src='/class_3.svg' alt='' />
                <div className="caption">
                    <img src={Book} alt='' />
                    <p> Post Graduation</p>
                </div>
            </div>

        </div>
    )
}

export default Program
