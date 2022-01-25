import { Button } from '../../Buttons/Button'
import FeaturedToday  from '../../Carousel/FeaturedToday/FeaturedTodaySlider'
import Explore from '../../Carousel/Explore/Explore'
import Reviews from '../../Carousel/Reviews/Reviews'
import FanFavorite from '../../Carousel/FanFavorite/FanFavorite'
import './Card.css'

export default function Card() {
    return (
        <div className='Card'>
            <div className='Card__slider-featured-today'>
                <h1>FEATURED TODAY</h1> 
                <FeaturedToday/>
                <Button link='/test' buttonStyle='btn--normal' buttonSize='btn--medium'>
                    <a>Get more</a>
                </Button>
            </div>
            <div className='Card__slider-explore'>
                <div className='Card__slider-explore-wrapper'>
                    <h1>Explore Movies & TV shows</h1>
                    <Explore/>
                    <Button link='/test' buttonStyle='btn--normal--dark' buttonSize='btn--medium'>
                        <a>Get more</a>
                    </Button>
                </div>
            </div>
            <div className='Card__slider-reviews'>
                <h1>Users reviews</h1>
                <Reviews/>
            </div>
            <div className='Card__slider-fanfavorite'>
                <h1>Fan Favorites</h1>
                <FanFavorite/>
                <Button link='/test' buttonStyle='btn--normal' buttonSize='btn--medium'>
                    <a>Get more</a>
                </Button>
            </div>
        </div>
    )
}
