import React, { useState } from 'react'
import  { Link } from 'react-router-dom'
import { Button } from '../../Buttons/Button'
import { SliderData } from './FeaturedTodayData'
import Slider from 'react-slick'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { AiOutlineStar, AiFillStar, AiOutlinePlayCircle } from 'react-icons/ai'
import './FeaturedTodaySlider.css'


const ImageSlider = ( {slides} : {slides: any} ) => {
    
    const [current, setCurrent] = useState(0)

    const NextArrow = ({onClick}: any) => {
        return (
          <div className="arrow next" onClick={onClick}>
                <FaArrowAltCircleRight className="right-arrow"/>
          </div>
        );
    };

    const PrevArrow = ({onClick}: any) => {
        return (
          <div className="left-arrow" onClick={onClick}>
            <FaArrowAltCircleLeft/>
          </div>
        );
    };

    const settings = {
        infinite: true,
        speed: 300,
        // slidesToShow: 5,
        centerMode: true,
        touchMove: false,
        variableWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current: any, next: any) => setCurrent(next)
    };

    return (
        <section className="container-slider">
            <Slider {...settings}>
                {SliderData.map((slide, index) => {
                    return(
                        <div className="ImageSlider">
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>                            
                                <li className="test">
                                    <Link to='/'>
                                        <div className="image-slider">
                                            <img src={slide.image} className='image' />
                                        </div>
                                    </Link>   
                                    <div className="image-text">
                                        <li className="image-text--items">
                                            <a className='title-text'>{slide.title}</a>
                                            
                                            <a className='title-rate'><AiFillStar/>{slide.rate}</a>
                                            
                                            <a href={slide.trailer} target='__blank' className='button-text'>
                                                <button className='slide-button'>
                                                    <h4>Watch trailer</h4>
                                                    <AiOutlinePlayCircle className='slide-icon'/>
                                                </button>
                                            </a> 
                                        </li>                                                                    
                                    </div>                                        
                                </li>                                      
                            </div>
                        </div>
                    )
                })}                
            </Slider>
        </section>
    )
}

export default ImageSlider