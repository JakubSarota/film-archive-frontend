import './Navbar.css'
import { Button } from '../Buttons/Button'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import { useEffect, useState } from 'react'
import { SidebarData } from './SidebarData/SidebarData'

/*Links*/

export default function Navbar() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const [navbar, setNavbar] = useState(false)

    if(sidebar) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'visible'
    }
    
    const changeBackground = () => {
        if(window.scrollY >=80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            
            <div className="navbar-container">
                <div className='navbar-header--left'>

                    <li>
                        <Link to='/' className='navbar-header-link--logo'>
                            <RiIcons.RiMovie2Line className='logo-icon'/><h2>FILM ARCHIVE</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='navbar-header-link--text'>
                            <p>Main page</p>
                        </Link>
                    </li>

                    <li>
                        <Link to='/' className='navbar-header-link--text'>
                            <p>Movies</p>
                        </Link>
                    </li>

                    <li>
                        <Link to='/' className='navbar-header-link--text'>
                            <p>Series</p>
                        </Link>
                    </li>

                    <li>
                        <Link to='/' className='navbar-header-link--text'>
                            <p>Rankings</p>
                        </Link>
                    </li>
                </div>
                    

                <div className='navbar-header--buttons'>      
                    <div className='button-items'>
                        <li>
                            <Button link='/test' buttonStyle='btn--outline-search' buttonSize='btn--medium'>
                                <AiIcons.AiOutlineSearch className='navbar-header--search'/>
                            </Button>
                        </li>
                        <li>
                            <Button link='/signup' buttonStyle='btn--outline' buttonSize='btn--medium'>
                                <a>Sign up</a>
                            </Button>
                        </li>
                        
                        {/* <li>
                            <Link to="#" className='menu-bars'>
                                <FaIcons.FaBars onClick={showSidebar}/>
                            </Link>
                        </li> */}
                    </div>
                </div>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
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

