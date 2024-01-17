import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import hero_image from '../Assests/hero_image.png'
import arrow_icon from '../Assests/arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="left-hand-hero">
        <div className='left-hand-hero-h3'>
        <span>New Arrivals only</span>
        </div>
        <div className='hand-icon'>
            <p>New</p>
            <img  className='hand-icon-img' src={hand_icon}alt="" />
            </div>
            <div className='left-hand-hero-p'>
            <p>Collections</p>
            <p>For everyone</p>
        </div>
        <div className="lastest-collection-btn">
                <p>Lastest collection</p>
                <img src={arrow_icon} alt="" />
            </div>
      </div>
      <div className="right-hand-hero">
        <img src={hero_image} width={`${408}px`} alt="" />
      </div>
    </div>
  )
}

export default Hero
