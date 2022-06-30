import '../../../App.css'
import { Button } from '../../Buttons/Button'
import '../Herosection.css'
import HerosectionData from '../HerosectionData.json'
import { AiFillStar } from 'react-icons/ai'


export default function Herosection__Sign() {
    return (
        <div>
            {HerosectionData.map((movie, index) => {
                return (
                    <div className="Herosection sign">
                        <img src={movie.images[0]} className='Herosection-image'></img>     
                        
                        <div className='Herosection__Sign'>
                            <div className='Herosection__Sign--contener'>
                                <h1>Sign In</h1>
                                <form>
                                    <ul className='Herosection__Sign--Sign-form'>
                                        <li>
                                            <input type="email" placeholder='Email' className='Herosection__Sign--input'></input>
                                        </li>
                                        <li>
                                            <input type="password" placeholder='Password' className='Herosection__Sign--input'></input>
                                        </li>
                                        <input type="submit" value="submit" className='Herosection__Sign--submit'></input>
                                    </ul>
                                </form>
                                <h3>Picture from: {movie.title}</h3>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
