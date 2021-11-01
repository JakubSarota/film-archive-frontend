import './navbar.css'
import { Button } from '../Buttons/button'

export default function navbar() {
    return (
        <nav className='navbar'>
            <form className='navbar-header--logo'>
                <h1>RECORD <br/>VIDEO</h1>
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
