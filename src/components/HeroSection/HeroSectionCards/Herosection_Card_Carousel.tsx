import Images from './Herosection_Image'
import HerosectionData from './Data/Herosection_Data'
import SliderCard from 'react-slick'
import { useState } from 'react'

const Herosection_Card_Carousel = ({image} : {image: any}) => {
    const [current, setCurrent] = useState(0) 
    
    const length = image.length
    console.log(length)

    const settingsCard = {  
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        accessibility: false,
        arrows: false,
        focusOnSelect: true,
        touchMove: false,  
        responsive: [
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