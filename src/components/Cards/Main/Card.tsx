import { Button } from '../../Buttons/Button'
import  FeaturedToday  from '../../Carousel/FeaturedToday/FeaturedTodaySlider'
import { FeaturedTodayData } from '../../Carousel/FeaturedToday/FeaturedTodayData'
import Explore from '../../Carousel/Explore/Explore'
import { ExploreData } from '../../Carousel/Explore/ExploreData'
import './Card.css'

export default function Card() {
    return (
        <div className='Card'>
            <div className='Card__slider-featured-today'>
                <h1>FEATURED TODAY</h1> 
                <FeaturedToday slides={FeaturedTodayData}/>
                <Button link='/test' buttonStyle='btn--normal' buttonSize='btn--medium'>
                    <a>Get more</a>
                </Button>
            </div>
            <div className='Card__slider-explore'>
                <div className='Card__slider-explore-wrapper'>
                    <h1>Explore Movies & TV shows</h1>
                    <Explore slides={ExploreData}/>
                    <Button link='/test' buttonStyle='btn--normal--dark' buttonSize='btn--medium'>
                        <a>Get more</a>
                    </Button>
                </div>
            </div>
            <div className='Card__slider-reviews'>
                <h1>Reviews</h1>
            </div>

        </div>
    )
}
