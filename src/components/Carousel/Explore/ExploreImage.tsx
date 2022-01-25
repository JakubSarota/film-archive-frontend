import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar, AiOutlinePlayCircle } from 'react-icons/ai'

export default function ExploreImage({path, src, title, rate, link} : {path: string,  src: string, title: string, rate: number, link: string} ) {
    return (
        <li className="ExploreImage">
            <Link to={path} className="ExploreImage-link">
                <figure className="ExploreImage-element">
                    <img src={src} className="ExploreImage-image" />
                </figure>
            </Link>
            <div className="ExploreImage-underline">
                <li className="ExploreImage-items">       
                    <a className="ExploreImage-title">{title}</a>
                    <a className="ExploreImage-rate"><AiFillStar/>{rate}</a>
                    <a href={link} target='__blank' className='button-text'>
                        <button className='ExploreImage-button'>
                            <h4>Watch trailer</h4>
                            <AiOutlinePlayCircle className='slide-icon'/>
                        </button>
                    </a> 
                </li> 
            </div>
        </li>
    )
}
