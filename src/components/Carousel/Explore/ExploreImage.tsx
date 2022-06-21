import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar, AiOutlinePlayCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { Button } from '../../Buttons/Button'

export default function ExploreImage({path, src, title, rate, link} : {path: string,  src: string, title: string, rate: number, link: string} ) {
    return (
        <li className="Explore__item">
            <Link to={path} className="Explore__item--link">
                <figure className="Explore__item--pic-wrap">
                    <img src={src} className="Explore__item--image" />
                    <svg height="20" width="15" className='test'>
                        <polygon points="0 0,15 0, 15 20, 7.5 12, 0 20"/>
                        <div>+</div>
                    </svg>
                </figure>
            </Link>
            <div className="Explore__item--underline">
                <div className="ExploreImage-items">
                    <div className='ExploreLink'>
                        <a href={link} target='__blank'>
                            <button className='ExploreImage-button'>
                                <AiOutlinePlayCircle className='slide-icon'/>
                            </button>
                        </a> 
                        <a href={link} target='__blank'>
                            <button className='ExploreImage-button'>
                                <AiOutlinePlusCircle className='slide-icon'/>
                            </button>
                        </a> 
                    </div> 
                    <div>
                        <a className="ExploreImage-title">
                            {title}
                        </a>
                    </div>
                </div> 
            </div>
        </li>
    )
}
