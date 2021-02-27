import React from 'react';
import './HeroSection.css';
import {StartButton} from '../Btn/btn';


function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src= "/video1.mp4" autoPlay loop muted />
            <h1>Hi! I am Daoyuan Guo</h1>
            <h1>I am a Front end Designer</h1>
            <h2>ADVENTURE AWAITS</h2>
            <div className='hero-btns'>
                <StartButton
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    Check me out!
                </StartButton>
            </div> 
        </div>
    )
}

export default HeroSection
