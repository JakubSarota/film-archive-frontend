import React from 'react'
import { SliderData } from './SliderData'

const ImageSlider = () => {
    return (
        <div className="container-slider">
            {SliderData.map((slide, index) => {
                return(
                    <div>
                        <img src={slide.image}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ImageSlider
