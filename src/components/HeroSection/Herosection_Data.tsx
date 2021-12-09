import React from 'react'
import './Herosection_Cards.css'
import Herosection_Cards from './Herosection_Cards'

export default function Herosection_Data() {
    return (
        <div className="Herosection_Data">
            <h2>Best in this year</h2>
            <div className="Herosection_Data-conteinter">
                <ul>
                    <Herosection_Cards
                        src='./images/banners/photo1.jpg'
                        path=''
                        name='Carmen Sandiego'
                        year='2019'
                    />
                </ul>
                <ul>
                    <Herosection_Cards
                        src='./images/banners/photo2.jpg'
                        path=''
                        name='Black Widow'
                        year='2021'
                    />
                </ul>
                <ul>
                    <Herosection_Cards
                        src='./images/banners/photo4.jpg'
                        path=''
                        name='Encanto'
                        year='2021'
                    />
                </ul>
                <ul>
                    <Herosection_Cards
                        src='./images/banners/photo3.jpg'
                        path=''
                        name='John Wick'
                        year='2014'
                    />
                </ul>
            </div>
        </div>
    )
}
