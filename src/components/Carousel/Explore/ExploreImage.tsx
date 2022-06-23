import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar, AiOutlinePlayCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { Button } from '../../Buttons/Button'

export default function ExploreImage({path, poster, title, rate, link} : {path: string,  poster: any, title: string, rate: number, link: string} ) {
    return (
        <li className="Explore__item">
            <Link to={path} className="Explore__item--link">
                <figure className="Explore__item--pic-wrap">
                    <img src={poster} className="Explore__item--image" />
                    {/* <svg height="20" width="15" className='test'>
                        <polygon points="0 0,15 0, 15 20, 7.5 12, 0 20"/>
                    </svg> */}
                </figure>
            </Link>
            <div className="Explore__item--underline">
                <div className="Explore__item--contents">

                    <li className='Explore__item--buttons'>
                            <button className='Explore__item--button'>
                                <a href={link} target='__blank'>
                                    <AiOutlinePlayCircle className='Explore__item--icon'/>
                                </a> 
                            </button> 
                            <button className='Explore__item--button'>
                                <a href={link} target='__blank'>
                                    <AiOutlinePlusCircle className='Explore__item--icon'/>
                                </a> 
                            </button>
                            <div className='Explore__item--rate'>
                                <h3 className='Explore__item--number'>{rate}<AiFillStar/></h3>
                            </div>
                    </li> 

                    <li className='Explore__item--title'>
                        <a className="Explore__item--text">
                            {title}
                        </a>
                    </li>

                </div> 
            </div>
        </li>
    )
}
