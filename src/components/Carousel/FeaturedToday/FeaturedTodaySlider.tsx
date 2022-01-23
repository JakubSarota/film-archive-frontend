import { useState } from 'react'
import  { Link } from 'react-router-dom'
import FeaturedTodayData from './FeaturedTodayData.json'
import Slider from 'react-slick'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { AiFillStar, AiOutlinePlayCircle } from 'react-icons/ai'
import './FeaturedTodaySlider.css'


const ImageSlider = () => {
    
    const [current, setCurrent] = useState(0)

    const NextArrow = ({onClick}: any) => {
        return (
          <div className="right-arrow" onClick={onClick}>
                <FaArrowAltCircleRight/>
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
        centerMode: true,
        touchMove: false,
        variableWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current: any, next: any) => setCurrent(next),
        responsive: [
            {
                breakpoint: 960,
                    settings: {
                        touchMove: true,
                    
                }
            },
        ]
    };

    return (
            <Slider {...settings}>
                {FeaturedTodayData.map((slide, index) => {
                    return(
                        <div className="ImageSlider">
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>                            
                                <li className="image-slider-row">
                                    <Link to={slide.path}>
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
    )
}

export default ImageSlider