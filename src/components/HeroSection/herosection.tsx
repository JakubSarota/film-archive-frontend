import '../../App.css'
import './Herosection.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

export default function Herosection() {
    return (
        <div className="home">
            <div className='hero-conteinter'>
                <Navbar/> {/*Sekcje navbar można sprawdzić w pliku Navbar.tsx */}
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
                    </div>
            </div>
        </div>
    )
}
