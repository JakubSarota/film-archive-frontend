import '../../App.css'
import './herosection.css'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'

import test from '../../pages/test'

export default function herosection() {
    return (
        <div className='hero-conteinter'>
            <img src='/images/photo1.jpg'></img>
            <Navbar/>
            
                <h1>HOME MOVIES</h1>
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
    )
}
