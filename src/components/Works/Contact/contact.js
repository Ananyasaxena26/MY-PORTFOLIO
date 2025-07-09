import React, { useRef } from 'react';
import './contact.css';

import Walmart from '../../assests/walmart.png';
import Adobe from '../../assests/adobe.png';
import Microsoft from '../../assests/microsoft.png';
import Facebook from '../../assests/facebook.png';

import FacebookIcon from '../../assests/facebook-icon.png';
import TwitterIcon from '../../assests/twitter.png';
import YouTubeIcon from '../../assests/youtube.png';
import InstagramIcon from '../../assests/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {                
        e.preventDefault();

        emailjs
            .sendForm('service_sofrvyw', 'template_ebz0lcs', form.current, {
                publicKey: '8p4GircqiaLVTPoRr', // 🔁 Replace with actual public key
            })
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                    alert('Email sent');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <section id='contactPage'>
            {/* Clients Section */}
            <div id='clients'>
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className='clientDesc'>
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with include:
                </p>
                <div className='clientImgs'>
                    <img src={Walmart} alt="Walmart" className="clientImg" />
                    <img src={Adobe} alt="Adobe" className="clientImg" />
                    <img src={Microsoft} alt="Microsoft" className="clientImg" />
                    <img src={Facebook} alt="Facebook" className="clientImg" />
                </div>
            </div>

            {/* Contact Form Section */}
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>
                    Please fill out the form below to discuss any work opportunities.
                </span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name ' name='your_name' />
                    <input type="email" className='email' placeholder='Your Email' name='your_email' />
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' className='submitBtn'>Submit</button>

                    {/* Social Links */}
                    <div className='links'>
                        <img src={FacebookIcon} alt="Facebook" className='link' />
                        <img src={TwitterIcon} alt="Twitter" className='link' />
                        <img src={YouTubeIcon} alt="YouTube" className='link' />
                        <img src={InstagramIcon} alt="Instagram" className='link' />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;


