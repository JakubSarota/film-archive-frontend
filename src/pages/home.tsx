import React from 'react'
import HeroSection from '../components/HeroSection/Herosection'
import Card from '../components/Cards/Card'
import HeroSection_Data from '../components/HeroSection/Herosection_Data'
import Navbar from '../components/Navbar/Navbar'

export default function home() {
    return (
        <React.Fragment>
            <Navbar/> 
            <HeroSection/>
            <HeroSection_Data/>
            <Card/>
        </React.Fragment>
    )
}
