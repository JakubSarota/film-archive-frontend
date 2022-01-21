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
          <div className="right-arrow-explore" onClick={onClick}>
                <FaArrowAltCircleRight/>
          </div>
        );
    };

    const PrevArrow = ({onClick}: any) => {
        return (
          <div className="left-arrow-explore" onClick={onClick}>
            <FaArrowAltCircleLeft/>
          </div>
        );
    };


    const settingsCard = {  
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
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
                    slidesToShow: 1, 
                    slidesToScroll: 1
                }
            },
        ]
    }

    return( 
        <SliderCard {...settingsCard}>
            {ExploreData.map((image, index) => {
                return(
                    <ExploreIamge key={index}
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