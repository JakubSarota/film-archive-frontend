import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../Buttons/Button'
import  ImageSlider  from '../../Carousel/FeaturedToday/FeaturedTodaySlider'
import { SliderData } from '../../Carousel/FeaturedToday/FeaturedTodayData'
import './Card.css'

export default function Card() {
    
    return (
        <div className='Card'>
            <div className='Card__slider-featured-today'>
                <h1>FEATURED TODAY</h1> 
                <ImageSlider slides={SliderData}/>
                <Button link='/' buttonStyle='btn--normal' buttonSize='btn--medium'>
                    <a>Get more</a>
                </Button>
            </div>
            <div className='Card__slider-explore'>
                <h1>Explore Movies & TV shows</h1>
            </div>
        </div>
    )
}
