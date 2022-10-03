import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Andrew</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyle: "none"}}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div>
                    <button className="button n-button">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;