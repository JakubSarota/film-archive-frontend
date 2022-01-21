import React from 'react'
import './Herosection_Card.css'
import  { Link } from 'react-router-dom'
// import Images from './Herosection_Image'
import { IoIosArrowForward } from 'react-icons/io'
import HerosectionData from './Data/Herosection_Data'
import HerosectionCarousel from './Herosection_Card_Carousel'

export default function Herosection_Card() {
    return (
        <div className="Herosection_Card">
            <div className="Herosection_Card-shadow">
                <div className="Herosection_Card-background"/>

                <div className="Herosection_Card_title-column">
                    <Link to='/test' className="Herosection_Card_title-content">
                        <h2>BEST IN THIS YEAR</h2>
                        <IoIosArrowForward className='Herosection_Card-icon'/>
                    </Link>
                </div>

                <div className="Herosection_Card-column">
                    <HerosectionCarousel image={HerosectionData}/>
                </div>
            </div>
        </div>
    )
}



