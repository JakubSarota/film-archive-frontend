import React from 'react'
import HeroSection from '../components/HeroSection/Herosection'
import Card from '../components/Cards/Main/Card'
import HeroSection_Data from '../components/HeroSection/HeroSectionCards/Herosection_Card'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function home() {
    return (
        <React.Fragment>
            <Navbar/> 
            <HeroSection/>
            <HeroSection_Data/>
            <Card/>
            <Footer/>
        </React.Fragment>
    )
}
