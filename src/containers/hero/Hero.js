import React from 'react'
import './hero.css'

//Assets
import hero_image from '../../assets/hero_image.png'

function Hero() {
    return (
        <>
        <div className='hero section-padding' id='home'>
            <div className='hero-content'>
                <h1 className='gradient-text'>I'm Ha Le Quyen</h1>
                <h2>Software Engineer</h2>
                <p>Seeking a Software Engineering Intern position to contribute to real-world production systems.</p>
                <a href='#works' className='explore-btn'>Explore my works</a>

            </div>
            <div className='hero-image'>
                <img src={hero_image} alt='Hero' />
            </div>
        </div>
        <div className='hero-scroll-animation'>
              <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
        </div>
        </>
    )
}

export default Hero
