import React from 'react'
import './Herosection_Cards.css'
import Herosection_Cards from './Herosection_Cards'
import { Button } from '../Buttons/Button'

export default function Herosection_Data() {
    return (
        <div className="Herosection_Data">
            <div className="Herosection_Data-shadow">
            <div className="Herosection_Data-background"/>

            <div className="Herosection_Data_title-column">
                <div className="Herosection_Data_title-content">
                    <h2>-BEST IN THIS YEAR-</h2>
                </div>

                <div className="Herosection_Data_title-content">
                    <Button link='/' buttonStyle='btn--outline' buttonSize='btn--tiny'>
                        <a>More</a>
                    </Button>
                </div>
            </div>    


            <div className="Herosection_Data-column">
                <div className="Herosection_Data-content">
                    <Herosection_Cards
                        src='./images/banners/photo1.jpg'
                        path=''
                        name='Carmen Sandiego'
                        year='2019'
                    />
                </div>
                <div className="Herosection_Data-content">
                    <Herosection_Cards
                        src='./images/banners/photo2.jpg'
                        path=''
                        name='Black Widow'
                        year='2021'
                    />
                </div>
                <div className="Herosection_Data-content">
                    <Herosection_Cards
                        src='./images/banners/photo4.jpg'
                        path=''
                        name='Encanto'
                        year='2021'
                    />
                </div>
                <div className="Herosection_Data-content">
                    <Herosection_Cards
                        src='./images/banners/photo3.jpg'
                        path=''
                        name='John Wick'
                        year='2014'
                    />
                </div>

            </div>
            </div>
        </div>
    )
}
