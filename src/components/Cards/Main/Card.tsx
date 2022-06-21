import { Button } from '../../Buttons/Button'
import FeaturedToday  from '../../Carousel/FeaturedToday/FeaturedTodaySlider'
import Explore from '../../Carousel/Explore/Explore'
import Reviews from '../../Carousel/Reviews/Reviews'
import './Card.css'

export default function Card() {
    return (
        <div className='Card'>
            <div className='Card__slider--explore'>

                    <h2>Explore Movies & TV shows</h2>
                    <div className='Card__slider--explore-carousel'>
                        <Explore/>
                    </div>
               
            </div>
            {/* <div className='Card__slider-featured-today'>
                <h1>FEATURED TODAY</h1> 
                <FeaturedToday/>
            </div> */}
            
            {/* <div className='Card__slider-reviews'>
                <h1>Users reviews</h1>
                <Reviews/>
            </div> */}
        </div>
    )
}
