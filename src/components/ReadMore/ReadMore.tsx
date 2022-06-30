import { useState } from 'react';
import './ReadMore.css'

const ReadMore = ({ children }: { children: any }) => {
  const text = children
  const [isMore, setisMore] = useState(true)
  const toggleReadMore = () => {
    setisMore(!isMore)
  }
  return (
    <p className="text">
      {isMore ? text.slice(0, 40) : text}
      <span onClick={toggleReadMore} className="readorhide">
        {isMore ? "...read more" : "show less"}
      </span>
    </p>
  )
}

export default ReadMore;
