import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const STYLES = ['btn--outline', 'btn--filled', 'btn--normal', 'btn--normal--dark']

const SIZES = ['btn--medium', 'btn--tiny']

interface Props {
    link: any;
    children: React.ReactNode;
    type?: any;
    onClick?: any;
    buttonStyle?: any;
    buttonSize?: any;
}

export const Button: React.FC<Props> = ({link, children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle: React.FC<{}> = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize: React.FC<{}> = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] 

    return (
        <Link to={link} className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>{children}</button>
        </Link>
    )
}
