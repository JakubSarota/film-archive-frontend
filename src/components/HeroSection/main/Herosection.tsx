import '../../../App.css'
import { Button } from '../../Buttons/Button'
import '../Herosection.css'
import HerosectionData from '../HerosectionData.json'
import { AiFillStar } from 'react-icons/ai'

export default function Herosection() {
    return (
        <div>
            {HerosectionData.map((movie, index) => {
                return (
                    <div className="Herosection home">
                        <img src={movie.images[0]} className='Herosection-image'></img>

                        <div className='Herosection-recomend'>
                            <div className='Recomend-contener'>
                                <li>
                                    <h1>{movie.title}</h1>
                                </li>
                                <li>
                                    {movie.category.map((item) => {
                                        return <p>{item}</p>
                                    })}
                                    <p>|</p>
                                    <p>{movie.year}</p>
                                </li>
                                <li>
                                    <a href={movie.trailer} target='__blank'>
                                        <Button link='' buttonStyle='btn--filled' buttonSize='btn--medium'>
                                            <a>Watch trailer</a>
                                        </Button>
                                    </a>

                                    <Button link={movie.info} buttonStyle='btn--outline' buttonSize='btn--medium'>
                                        <a>View info</a>
                                    </Button>
                                </li>
                            </div>

                        </div>
                        <div className='Herosection-points'>
                            <div className='Herosection-points-contener'>
                                <li>
                                    <p>Rating based on: {movie.users_rates}</p>
                                </li>
                                <li className='rating'>
                                    <h1>{movie.rates}<AiFillStar /></h1>
                                </li>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
