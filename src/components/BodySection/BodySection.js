import React from 'react';
import './BodySection.css';


const BodySection = () => {
    return (
        <div className='BodySection'>
            <div className="backgroundPart">

                <h1> <span>Education</span> & Training  Organization</h1>
                <p>We provide the best Education System for you</p>

                <div className="btnAll">
                    <div className="forAllClass">
                        <a href="#">
                            <button>Our Course</button>
                        </a>
                    </div>
                    <div className="btnContactUs">
                        <a href="#">
                            <button>Contact Us</button>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default BodySection;