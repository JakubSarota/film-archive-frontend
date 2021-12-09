import React from 'react'
import HeroSection from '../components/HeroSection/Herosection'
import Card from '../components/Cards/Card'
import HeroSection_Data from '../components/HeroSection/Herosection_Data'

export default function home() {
    return (
        <React.Fragment>
            <HeroSection/>
            <HeroSection_Data/>
        </React.Fragment>
    )
}
