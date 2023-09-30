import React from 'react';
import './TopHeader.css';
import {FaUser } from 'react-icons/fa';


const TopHeader = () => {
    return (
        <div className='topBar'>
           <div className="sub-tobBar">
            <div className="emailPart">
               
                <a href="#">support@themeix.com</a>
            </div>
            <div className="singUpPart">
                <button>
                <FaUser className='userIcon' />
                    <p> Sing In</p>
                </button>
               

            </div>
           </div>

            
        </div>
    );
};

export default TopHeader;