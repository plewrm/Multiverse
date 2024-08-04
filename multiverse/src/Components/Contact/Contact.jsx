import React, { useState, useEffect } from 'react'
import './Contact.css'
import Message from '../../assets/messageicon.png'
import EmailCon from '../../assets/emailicon.png'
import CallCon from '../../assets/callicon.png'
import LocationCon from '../../assets/locationicon.png'
import ArrowNext from '../../assets/arrow_next_white.svg'
const Contact = () => {

    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", import.meta.env.VITE_EMAIL_ACCESS_KEY);
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

    useEffect(() => {
        if (result === "Form Submitted Successfully") {
            const timer = setTimeout(() => {
                setResult("");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [result]);
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={Message} alt='' /></h3>
                <p>American Pacific Coast. It borders Oregon to the north, Nevada and Arizona to the east,
                    and an international border with the Mexican state of Baja California to the south.
                    With 39 million residents[6] across an area of 163,696 square miles (423,970 km2),
                    [11] it is the most populous U.S. state</p>
                <ul>
                    <li><img src={EmailCon} alt='' />Contact@PlewrmStack.dev</li>
                    <li><img src={CallCon} alt='' />+91 983-745-2745</li>
                    <li><img src={LocationCon} alt='' />7th Avenu neu, Golmedge <br /> CA 413744, United Kingdom</li>
                </ul>
            </div>
            <div className="contact-col contact-form">
                <form
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                    />

                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        required
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        required
                    />

                    <button type="submit" className='btn dark-btn'>Submit<img src={ArrowNext} /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
