import React from 'react'
import './Herosection_Cards.css'
import  { Link } from 'react-router-dom'
import Images from './Herosection_Images'
import { IoIosArrowForward } from 'react-icons/io'
import { Button } from '../../Buttons/Button'

export default function Herosection_Data() {
    return (
        <div className="Herosection_Data">
            <div className="Herosection_Data-shadow">
                <div className="Herosection_Data-background"/>

                <div className="Herosection_Data_title-column">
                <Link to='/' className="Herosection_Data_title-content">
                    <h2>BEST IN THIS YEAR</h2>
                    <IoIosArrowForward/>
                </Link>

                    {/* <div className="Herosection_Data_title-content">
                        <Button link='/' buttonStyle='btn--outline' buttonSize='btn--tiny'>
                            <a>More</a>
                        </Button>
                    </div> */}
                </div>    


                <div className="Herosection_Data-column">


                    
                    {/* <div className="Herosection_Data-content">
                        <Images
                            src='./images/banners/photo1.jpg'
                            path=''
                            name='Carmen Sandiego'
                            year='2019'
                        />
                    </div>
                    <div className="Herosection_Data-content">
                        <Images
                            src='./images/banners/photo2.jpg'
                            path=''
                            name='Black Widow'
                            year='2021'
                        />
                    </div>
                    <div className="Herosection_Data-content">
                        <Images
                            src='./images/banners/photo4.jpg'
                            path=''
                            name='Encanto'
                            year='2021'
                        />
                    </div>
                    <div className="Herosection_Data-content">
                        <Images
                            src='./images/banners/photo3.jpg'
                            path=''
                            name='John Wick'
                            year='2014'
                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}



