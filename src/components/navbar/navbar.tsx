import './Navbar.css'
import { Button } from '../Buttons/Button'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import { useState } from 'react'
import { SidebarData } from '../SidebarData/SidebarData'


export default function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <nav className='navbar'>
            <form className='navbar-header--logo'>
                <Link to='/' className='navbar-header-link--logo'>
                    <RiIcons.RiMovie2Line size={40} className='logo-icon'/><h2>FILM <br/> ARCHIVE</h2>
                </Link>
            </form>
            <form className='navbar-header--input'>
                <AiIcons.AiOutlineSearch size={20}  className='input--icon'/>
                <input type='text' placeholder='Search'/>
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
                        <Link to="#" className='menu-bars'>
                            <FaIcons.FaBars size={35} onClick={showSidebar}/>
                        </Link>
                    </li>
                </div>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose size={35} onClick={showSidebar}/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link  to={item.path}>
                                    {item.icon} 
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </nav>
    )
}
