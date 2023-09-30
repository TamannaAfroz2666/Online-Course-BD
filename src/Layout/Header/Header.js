import React from 'react';
import './Header.css';

import logo from '../../Assets/Image/Logo/logo.jpg'

const Header = () => {
    return (
        <div>
            <div className="headerMain">
                <div className="headerSub">
                    <div className="logo">
                        <a href="#">
                            <img src={logo} alt="wait please ....." />
                            <p>Edu <span>Zone</span> <br /><small>Happy Education</small></p>
                        </a>
                    </div>

                    <div className="navbarMain">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Course</a>
                        <a href="#">Lesson</a>
                        <a href="#">Pages</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Header;