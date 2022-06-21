import { Button } from '../../Buttons/Button'
import FeaturedToday  from '../../Carousel/FeaturedToday/FeaturedTodaySlider'
import Explore from '../../Carousel/Explore/Explore'
import Reviews from '../../Carousel/Reviews/Reviews'
import './Card.css'

export default function Card() {
    return (
        <div className='Card'>
            <div className='Card__slider--explore'>
                <div className='Card__slider-title'>
                    <h2>Explore Movies & TV shows</h2>
                    <Button link='' buttonStyle='btn__get_more' buttonSize='btn--tiny'>
                        <a>Get more</a>
                    </Button>
                </div>

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
