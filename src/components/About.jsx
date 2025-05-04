import React from 'react'
import '../styles/about.css';

const About = () => {
    return (
        <div className='about-section'>
            <p>About us</p>
            <p>creating digital solutions<br></br>for brand growth</p>
            <div className='detailed-section'>
                <div className='left-section'>
                    <div className='left-section-1'>
                        <img src="https://ex-coders.com/html/exolax/assets/img/icon/02.svg" alt="mission icon" />
                        <div>
                            <p>Our mission</p>
                            <p>Our Mission is to<br></br>redefine boundaries, captivate audiences &<br></br> drive advancement through</p>
                        </div>
                    </div>
                    <div className='left-section-2'>
                        <img src="https://ex-coders.com/html/exolax/assets/img/icon/03.svg" alt="vision icon" />
                        <div>
                            <p>Our vision</p>
                            <p>Our Mission is to<br></br>redefine boundaries, captivate audiences &<br></br> drive advancement through</p>
                        </div>
                    </div>
                    <div className='left-section-3'>
                        <img src="https://ex-coders.com/html/exolax/assets/img/icon/04.svg" alt="awards icon" />
                        <div>
                            <p>Our awards</p>
                            <p>Our Mission is to<br></br>redefine boundaries, captivate audiences &<br></br> drive advancement through</p>
                        </div>
                    </div>
                </div>
                <div className='right-section'>
                    <div className='image-text-div'>
                        <img src="https://ex-coders.com/html/exolax/assets/img/about/01.jpg" alt="company portrayal stock image" />
                        <p>At the intersection of vision and execution, we bring creative ideas team transforms concepts into compelling narratives,</p>
                    </div>
                    <img src="https://ex-coders.com/html/exolax/assets/img/about/02.jpg" alt="another company portrayal stock image" />
                </div>
            </div>
        </div>
    )
}

export default About