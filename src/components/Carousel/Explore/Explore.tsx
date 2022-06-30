import SliderCard from 'react-slick'
import { useEffect, useState } from 'react'
import ExploreIamge from './ExploreImage'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import MoviesService from '../../Services/Movie/MoviesService'
import IMovies from '../../Services/Movie/Movie'
import './Explore.css'

const Explore = () => {
    const defaultMovies: IMovies[] = []

    const [movies, setMovies]: [IMovies[], (movies: IMovies[]) => void] = useState(defaultMovies)

    const getMovies = () => {
        MoviesService.getMovies().then(res => {
            setMovies(res.data)
            // console.log(res.data)
        })
    }

    useEffect(() => {
        getMovies()
    }, [])



    const [current, setCurrent] = useState(0)

    const NextArrow = ({ onClick }: any) => {
        return (
            <div className="right-arrow__explore" onClick={onClick}>
                <div className="rigt-arrow-background__explore">
                    <GrFormNext className="right-arrow-icon__explore" />
                </div>
            </div>
        );
    };

    const PrevArrow = ({ onClick }: any) => {
        return (
            <div className="left-arrow__explore" onClick={onClick}>
                <div className="left-arrow-background__explore">
                    <GrFormPrevious className="left-arrow-icon__explore" />
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

    return (
        <SliderCard {...settingsCard}>
            {movies.map((movie, index) => {
                return (
                    <ExploreIamge key={movie.id}
                        path={"/"}
                        poster={""}
                        title={movie.nameMovie}
                        rate={movie.rating}
                        link={movie.link_to_watch}
                    />
                )
            })}
        </SliderCard>
    )
}

export default Explore