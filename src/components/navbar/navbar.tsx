import './Navbar.css'
import { Button } from '../Buttons/Button'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { useState } from 'react'

export default function Navbar() {

   const [sidebar, setSidebar] = useState(false)

    return (
            <nav className='navbar'>
                <form className='navbar-header--logo'>
                    <Link to='/' className='navbar-header-link--logo'>
                        <h2>JAKSAR <br/>MOVIES</h2>
                    </Link>
                </form>
                <form className='navbar-header--input'>
                    <input type='text' placeholder='Search' className='input--box'></input>
                </form>

                <div className='navbar-header--buttons'>      
                    <div className='button-item'>
                        <li>
                            <Button link='/' buttonStyle='btn--outline' buttonSize='btn--medium'>
                                <a>Log in</a>
                            </Button>
                        </li>
                        <li>
                            <Button link='/' buttonStyle='btn--outline' buttonSize='btn--medium'>
                                <a>Register</a>
                            </Button>
                        </li>
                        <li>
                            <Link to="#" className='hamburger--medium'>
                                <FaIcons.FaBars />
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>
    )
}
