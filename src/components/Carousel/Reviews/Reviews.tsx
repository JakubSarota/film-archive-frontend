import './Reviews.css'
// import { ReviewData } from'./ReviewsData'
import Slider from 'react-slick'
import { useEffect, useState } from 'react'
// import { ReviewData } from './ReviewsData.json'


export default function Reviews() {

  // const [data, setData] = useState([])

  // const getData = () => {fetch('./ReviewsData.json', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //   })
  //   .then(function (response) {
  //     console.log(response)
  //     return response.json()
  //   })
  //   .then(function (myjson) {
  //     console.log(myjson)
  //     return myjson.json()
  //   })
  // }

  // useEffect(()=>{
  //   getData()
  // }, [])
  // console.log('dlugosc '+getData.length)
  return(
      <div className="review-container">
          <div className="review-container-image">
            <div className="review-container-feature">
              
            </div>
          </div>
      </div>
  )
}
