import SliderCard from 'react-slick'
import { useEffect, useState } from 'react'
import ExploreData from './ExploreData.json'
import ExploreIamge from './ExploreImage'
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import MoviesService from '../../Services/MoviesService'
import './Explore.css'

function Explore() {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        MoviesService.getMovies().then(res => {
            setMovies(res.data)
        })
    }

    useEffect(() => {
        getMovies()
    })

    const [current, setCurrent] = useState(0) 

    const NextArrow = ({onClick}: any) => {
        return (
          <div className="right-arrow__explore" onClick={onClick}>
                <div className="rigt-arrow-background__explore">
                    <GrFormNext className="right-arrow-icon__explore"/>
                </div>
          </div>
        );
    };

    const PrevArrow = ({onClick}: any) => {
        return (
          <div className="left-arrow__explore" onClick={onClick}>
                <div className="left-arrow-background__explore">
                    <GrFormPrevious className="left-arrow-icon__explore"/>
                </div>
          </div>
        );
    };


    const settingsCard = {  
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        speed: 500,
        accessibility: false,
        arrows: true,
        touchMove: false,  
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current: any, next: any) => setCurrent(next),
        responsive: [
            {
                breakpoint: 1600,
                    settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1280,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                }
            },
            {
                breakpoint: 960,
                    settings: {
                        touchMove: true,
                        slidesToShow: 1, 
                        slidesToScroll: 1
                }
            },
        ]
    }

    return( 
        <SliderCard {...settingsCard}>
            {movies.map((movie, index) => {
                return(
                    <ExploreIamge key={index}
                        path={"/"}
                        poster={"/"}
                        title={"/"}
                        rate={0}
                        link={"/"}
                    />
                )
            })}
        </SliderCard>
    )
}

export default Explore