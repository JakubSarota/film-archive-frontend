import { Button } from '../../Buttons/Button'
import Explore from '../../Carousel/Explore/Explore'
import './Card.css'

export default function Card() {
    return (
        <div className='Card'>
            <div className='Card__slider--explore'>
                <div className='Card__slider-title'>
                    <h2>Explore Movies & TV shows</h2>
                    <Button link='/test' buttonStyle='btn__get_more' buttonSize='btn--tiny'>
                        <a>Get more</a>
                    </Button>
                </div>
                <div className='Card__slider--explore-carousel'>
                    <Explore />
                </div>
            </div>
        </div>
    )
}
