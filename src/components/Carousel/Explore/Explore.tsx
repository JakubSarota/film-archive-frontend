import SliderCard from 'react-slick'
import { useState } from 'react'
import { ExploreData } from './ExploreData'
import ExploreIamge from './ExploreImage'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './Explore.css'

const Explore = ({slides} : {slides: any}) => {
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


    const settingsCard = {  
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        accessibility: false,
        arrows: false,
        touchMove: false,  
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current: any, next: any) => setCurrent(next),
        responsive: [
            {
                breakpoint: 1260,
                    settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 960,
                    settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    return( 
        <SliderCard {...settingsCard}>
            {ExploreData.map((image, index) => {
                return(
                    <ExploreIamge 
                        path={image.path}
                        src={image.image}
                        title={image.title}
                        rate={image.rate}
                        link={image.trailer}
                    />
                )
            })}
        </SliderCard>
    )
}

export default Explore