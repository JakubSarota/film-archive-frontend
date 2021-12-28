import React from 'react'
import { Link } from 'react-router-dom'
import  ImageSlider  from '../Carousel/ImageSlider'
import { SliderData } from '../Carousel/SliderData'
import './Card.css'

export default function Card() {
    return (
        <div className='Card'>
            <h1>FEATURED TODAY</h1> 
            {/* <div className='Card__container'>
                <div className='Card__column'>
                    <div className='Card__content'>
                        <Link to='' className='Card__items-Link'>
                            <h2>Movies this day's</h2>
                        </Link>
                    </div>
                </div>
                <div className='Card__column'>
                    <div className='Card__content'>
                        <Link to='' className='Card__items-Link'>
                            <h2>Series this day's</h2>
                        </Link>
                    </div>
                </div>
            </div> */}
            <div className='Card__slider'>
                <ImageSlider slides={SliderData}/>
            </div>
        </div>
    )
}
