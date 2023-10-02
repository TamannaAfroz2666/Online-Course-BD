import React from 'react';
import './CourseQuantityInfo.css';
import { AiOutlinePlus } from "react-icons/ai";

const CourseQuantityInfo = () => {
    return (
        <div className='courseQuantity'>
            <div className="quantityHead">
                <div className="passedGraduates">
                    <h2>3235</h2>
                    <span>Passed Graduates</span>

                </div>
                <div className="coursePublished">
                    <h2>256 <span> <AiOutlinePlus /> </span></h2>
                    <span>Passed Graduates</span>

                </div>
                <div className="qualifiedStaff">
                    <h2>3235</h2>
                    <span>Passed Graduates</span>

                </div>
                <div className="countryReached">
                    <h2>3235</h2>
                    <span>Passed Graduates</span>

                </div>

            </div>

        </div>
    );
};

export default CourseQuantityInfo;