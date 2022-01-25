import './Reviews.css'
import Slider from 'react-slick'
import { AiFillStar, AiOutlinePlayCircle } from 'react-icons/ai'
import ReviewData from './ReviewsData.json'
import ReadMore from '../../ReadMore/ReadMore'
import { Link } from 'react-router-dom'

const settings = {
  infinite: true,
  slidesToShow: 2,
  autoplay: true,
  autoplaySpeed: 9000,
  speed: 500,
  accessibility: false,
  arrows: false,
  touchMove: false, 
  responsive: [
    {
        breakpoint: 960,
            settings: {
              slidesToShow: 1,
        }
    },
]
}

const Reviews = () => {
  return(
    <Slider {...settings}>
      {ReviewData.map((data, index) => {
        return(
          <div className="review-container">
            {/*Content*/}
              <div className="review-container-feature">
                  <Link to={data.linktomovie} className="review-name">
                      <h4>{data.moviename}</h4>
                  </Link>
                  <li>
                    <a className='review-text'>
                      {(data.content).slice(0,92)}
                      <Link to={data.linktoreview} className='review-link'>...read more</Link>
                    </a>
                  </li>
              </div>
              {/*User*/}
              <div className="review-container-user">
                <Link to={data.linktoprofile}>
                  <div className="review-avatar">
                    <img src={data.profileimage} className="avatar__image"/>
                  </div>
                </Link>
                <div className="username-rate">
                  <Link to={data.linktoprofile} className='review-username'>
                    <a>{data.username}</a>
                  </Link>
                  <a className='review-rate'><AiFillStar/>{'\t'+data.rate}</a>
                </div>
              </div>
          </div>
        )})
      }
    </Slider>
  )
}

export default Reviews