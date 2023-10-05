import React from 'react';
import './CourseSupport.css';
import { PiBookDuotone } from "react-icons/pi";
import { ImFileVideo } from "react-icons/im";
import { HiSwatch } from "react-icons/hi2";

const CourseSupport = () => {
    return (
        <div className="support">
            <div className='courseSupport'>
                <div className="supportSection">
                    <div className="courseIntegrated">
                        <span> <PiBookDuotone size={90} className='bookIconSupport'/> </span>
                        <h1>Course Integrated</h1>
                        <p>Contacr Dewaty Feaert</p>
                    </div>
                    <div className="videoSupport">
                        <span> <ImFileVideo size={90} className='bookIconSupport'/></span>
                        <h1>Video Supported</h1>
                        <p>Contacr Dewaty Feaert</p>

                    </div>
                    <div className="cleanSupport">
                        <span> <HiSwatch size={90} className='bookIconSupport'/> </span>
                        <h1>Clean Layout</h1>
                        <p>Contacr Dewaty Feaert</p>

                    </div>


                </div>


            </div>

        </div>

    );
};

export default CourseSupport;

