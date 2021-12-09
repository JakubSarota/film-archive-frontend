import { Link } from "react-router-dom"
import './Herosection_Cards.css'

export default function Herosection_Cards({src, name, path, year} : {src: string, name: string, path: string, year: string}) {
    return (
        <li className="Herosection_Cards">
            <Link to={path} className="Herosection_Cards-Link">
                <figure className="Herosection_Cards-wrapper">
                    <img src={src} className="Herosection_Cards-img"/>
                </figure>
                <div className="Herosection_Cards-info">
                    <a className="Herosection_Cards-text">{name}<br/></a>
                    <a className="Herosection_Cards-text">{year}</a>
                </div>
            </Link>
            
        </li>
    )
}

