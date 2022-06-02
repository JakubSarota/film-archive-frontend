import '../../App.css'
import { Button } from '../Buttons/Button'
import './Herosection.css'

export default function Herosection() {
    return (
        <div className="Herosection home">
            <img src="https://m.media-amazon.com/images/M/MV5BZTNmMTE1NzItYmFhMy00MGNkLWI2M2QtYzc5ZmMwY2U5YWJlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" className='Herosection-image'></img>
            
            <div className='Herosection-recomend'>      
                <div className='Recomend-contener'>
                    <li>
                        <h1>Raya and the Last Dragon</h1>
                    </li>
                    <li>
                        <p>Fantasy</p>
                        <p>|</p>
                        <p>2021</p>
                    </li>
                    <li>
                        <Button link='/test' buttonStyle='btn--filled' buttonSize='btn--medium'>
                            <a>Watch trailer</a>
                        </Button>

                        <Button link='/test' buttonStyle='btn--outline' buttonSize='btn--medium'>
                            <a>View info</a>
                        </Button>
                    </li>
                </div>
            </div>
        </div>
    )
}
