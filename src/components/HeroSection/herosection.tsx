import '../../App.css'
import './Herosection.css'
import { Link } from 'react-router-dom'

export default function Herosection() {
    return (
        <div className="home">
            <div className='hero-conteinter'>
                
                <h1>FILM ARCHIVE</h1>
                    <hr className='line-under-text'/>
                    <div className='hero-conteinter--items'>
                        <div className='hero-conteinter-link-items'>
                            <Link to='/' className='hero-conteinter-link'>
                                <li><h3>MOVIES</h3></li>
                            </Link> 
                        </div>
                        
                        <div className='hero-conteinter-link-items'>
                            <Link to='/' className='hero-conteinter-link'>
                                <li><h3>SERIES</h3></li>
                            </Link> 
                        </div>
                        
                        <div className='hero-conteinter-link-items'>
                            <Link to='/' className='hero-conteinter-link'>
                                <li><h3>TRAILERS</h3></li>
                            </Link> 
                        </div>
                    </div>
            </div>
        </div>
    )
}
