import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlayCircle } from 'react-icons/ai'

export default function ExploreImage({path, src, title, rate, link} : {path: string,  src: string, title: string, rate: number, link: string} ) {
    return (
            <Link to={path} className="ExploreImage">
                <figure className="ExploreImage-element">
                    <img src={src} className="ExploreImage-image" />
                    <div className="ExploreImage-underline">
                        <a className="ExploreImage-title">{title}</a>
                        <a className="ExploreImage-rate">{rate}</a>
                        <a href={link} target='__blank' className='button-text'>
                            <button className='ExploreImage-button'>
                                <h4>Watch trailer</h4>
                                <AiOutlinePlayCircle className='slide-icon'/>
                            </button>
                        </a> 
                    </div>
                </figure>
            </Link>
    )
}
