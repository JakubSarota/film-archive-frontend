import { useState } from 'react'
import '../../App.css'
import { Button } from '../Buttons/Button'
import './Herosection.css'
import HerosectionData from './HerosectionData.json'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import NavbarCard from 'react-slick'

export default function Herosection() {

    let fillstars = (n: Number) => {
        
        return <>{Array.from(Array(n), (e, i) => {
                return (
                    <p key={i} className='filledstar'><AiFillStar/></p>
                )
        })}</>
    }

    let unfillstars = (n: Number) => {
        
        return <>{Array.from(Array(n), (e, i) => {
                return (
                    <p key={i} className='unfilledstar'><AiOutlineStar/></p>
                )
        })}</>
    } 
    
    return (
        <div>
            {HerosectionData.map((movie, index) => {
                return(
                    <div className="Herosection home">
                        <img src={movie.image[0]} className='Herosection-image'></img>
            
                        <div className='Herosection-recomend'>      
                            <div className='Recomend-contener'>
                                <li>
                                    <h1>{movie.title}</h1>
                                </li>
                                <li>
                                    {movie.category.map((item) => {
                                        return <p>{item}</p>
                                    })}
                                    <p>|</p>
                                    <p>{movie.year}</p>
                                </li>
                                <li>
                                    <a href={movie.trailer} target='__blank'>
                                        <Button link='' buttonStyle='btn--filled' buttonSize='btn--medium'>
                                            <a>Watch trailer</a>
                                        </Button>
                                    </a>
                                    
                                    <Button link={movie.info} buttonStyle='btn--outline' buttonSize='btn--medium'>
                                        <a>View info</a>
                                    </Button>
                                </li>
                            </div>
                        </div>
                        {/* <div className='Herosection-points'>
                            <div className='Herosection-points-contener'>
                                <li>
                                    <p>Rating based on: {movie.users_rates}</p>
                                </li>
                                <li>
                                    <div className='rating'>
                                        {fillstars(Math.round(movie.rates))}
                                        {unfillstars(Math.round(5-movie.rates))}
                                    </div>
                                </li>
                            </div>
                        </div> */}
                    </div>
                )
            })}
            
        </div>
    )
}
