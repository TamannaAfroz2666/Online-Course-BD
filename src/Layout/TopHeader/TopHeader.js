import React from 'react';
import './TopHeader.css';
import {FaUser, FaYoutube } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopHeader = () => {
    return (
        <div className='container'>
           <div className="topBar">
            <div className="emailPart">
                <a href="#">support@themeix.com</a>
            </div>
            <div className="singUpPart">
                <button>
                <FaUser className='userIcon' />

                     Sing In
                </button>
               

            </div>
           </div>

            
        </div>
    );
};

export default TopHeader;