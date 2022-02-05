import Images from './Herosection_Image'
import HerosectionData from './Data/Herosection_Data.json'
import SliderCard from 'react-slick'
import { useState } from 'react'

const Herosection_Card_Carousel = () => {
    const [current, setCurrent] = useState(0) 
    
    const settingsCard = {  
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        touchMove: false,  
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
            {HerosectionData.map((image, index) => {
                return(
                        <Images key={index}
                            src={image.src}
                            name={image.name}
                            path={image.path}
                            year={image.year}
                        />
                )
            })}
            
        </SliderCard>
    )
}

export default Herosection_Card_Carousel