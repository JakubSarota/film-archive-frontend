import './navbar.css'
import { Button } from '../Buttons/button'
import { Link } from 'react-router-dom'

export default function navbar() {
    return (
        <nav className='navbar'>
            <form className='navbar-header--logo'>
                <Link to='/' className='navbar-header-link--logo'>
                    <h2>RECORD <br/>VIDEO</h2>
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
                </div>
            </div>
        </nav>
    )
}
