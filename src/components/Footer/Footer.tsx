import React from 'react';
import './Footer.css'

const year = new Date().getUTCFullYear();

export default function Footer() {
    return <div className="footer">
        <div className="footer-container">
            <span className="footer-element">
                <p className="footer-text">Film Archive {year}</p>
            </span>
        </div>
    </div>;
}
