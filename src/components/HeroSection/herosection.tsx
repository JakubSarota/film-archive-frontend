import '../../App.css'
import './herosection.css'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'

export default function herosection() {
    return (
        <div className='hero-conteinter'>
            <img src='/images/photo1.jpg'></img>
            <Navbar/>
            
                <h1>HOME MOVIES</h1>
                <hr className='line-under-text'/>
                <div className='hero-conteinter--items'>
                    <li>
                        <div className='hero-conteinter-link-items'>
                            <Link to='/' className='hero-conteinter-link'>MOVIES</Link> 
                        </div>
                    </li>
                    <li>
                        <div className='hero-conteinter-link-items'>
                            <Link to='/' className='hero-conteinter-link'>SERIES</Link> 
                        </div>
                    </li>
                </div>
            
        </div>
    )
}
