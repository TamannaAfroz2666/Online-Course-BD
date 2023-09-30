import React from 'react';
import './Header.css';
import logo from '../../Assets/Image/Logo/logo.jpg'
import { AiOutlineDown } from "react-icons/ai";


const Header = () => {
    return (
        <div>
            <div className="headerMain">
                <div className="headerSub">
                    <div className="logo">
                        <a href="#">
                            <img src={logo} alt="wait please ....." />
                            <p>
                                <span className='edu'>Edu</span>
                                 <span className='zone'>Zone</span>
                                  <br />
                                  <small>Happy Education</small></p>
                        </a>
                    </div>

                    <div className="navbarMain">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Course
                        
                         </a>
                         <small >
                        <AiOutlineDown className='iconDown' /> 
                        </small>
                        <a href="#">Lesson</a>
                        <small >
                        <AiOutlineDown className='iconDown' /> 
                        </small>
                        <a href="#">Pages</a>
                        <small >
                        <AiOutlineDown className='iconDown' /> 
                        </small>
                        <a href="#">Blog</a>
                        <small >
                        <AiOutlineDown className='iconDown' /> 
                        </small>
                        <a href="#">Contact</a>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Header;