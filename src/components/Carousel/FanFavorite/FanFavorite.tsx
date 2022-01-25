import React, {useState} from 'react';
import FanFavoriteImage from '../Explore/ExploreImage'
import FanFavoriteData from './FanFavoriteData.json'
import Slider from 'react-slick'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './FanFavorite.css'

const FanFavorite = () => {
    const [current, setCurrent] = useState(0) 

    const NextArrow = ({onClick}: any) => {
        return (
          <div className="right-arrow-fanfavorite" onClick={onClick}>
                <FaArrowAltCircleRight/>
          </div>
        );
    };

    const PrevArrow = ({onClick}: any) => {
        return (
          <div className="left-arrow-fanfavorite" onClick={onClick}>
            <FaArrowAltCircleLeft/>
          </div>
        );
    };


    const settings = {  
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        accessibility: false,
        arrows: true,
        touchMove: false,  
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current: any, next: any) => setCurrent(next),
        responsive: [
            {
                breakpoint: 1600,
                    settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1280,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                }
            },
            {
                breakpoint: 960,
                    settings: {
                        touchMove: true,
                        slidesToShow: 1, 
                        slidesToScroll: 1
                }
            },
        ]
    }

    return(
        
            <Slider {...settings}>
                
                    {FanFavoriteData.map((image, index) => {
                        return(
                            <div className="fan-favorite">
                                <FanFavoriteImage key={index}
                                    path={image.path}
                                    src={image.image}
                                    title={image.title}
                                    rate={image.rate}
                                    link={image.trailer}
                                />
                            </div>
                        )
                    })}
                
            </Slider>
        
    )
}

export default FanFavorite