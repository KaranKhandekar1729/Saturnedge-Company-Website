import React from 'react';
import '../styles/hero.css';
import { scroller } from 'react-scroll';

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className='tagline-section'>
                <p>HI THERE! WE ARE</p>
                <p>SATURN EDGE</p>
                <p>WHERE</p>
                <p>INNOVATION</p>
                <p>MEETS</p>
                <p>EXECUTION</p>
            </div>
            <div className='to-contact'>
                <i className="bi bi-arrow-up-right arrow-icon"
                    onClick={() => {
                        scroller.scrollTo('contact', {
                            smooth: true,
                            duration: 1000
                        });
                    }}
                ></i>
                <p>How can we help you?</p>
            </div>
            <div className='hero-services-list'>
                <ul>
                    <li>UI/UX DESIGN</li>
                    <li>DIGITAL MARKETING</li>
                    <li>WEB DEVELOPMENT</li>
                </ul>
            </div>
        </div>
    )
}

export default Hero