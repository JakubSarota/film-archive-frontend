import { Link } from "react-router-dom"
import './Herosection_Card.css'

export default function Herosection_Image({src, name, path, year} : {src: any, name: any, path: any, year: any}) {
    return (
        <li className="Herosection_Image">
            <Link to={path} className="Herosection_Image-Link">
                <figure className="Herosection_Image-wrapper">
                    <img src={src} className="Herosection_Image-img"/>
                </figure>
                <div className="Herosection_Image-info">
                    <a className="Herosection_Image-text">{name}<br/></a>
                    <a className="Herosection_Image-text">{year}</a>
                </div>
            </Link>
        </li>
    )
}

