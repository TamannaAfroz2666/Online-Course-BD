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
                <div className="passedGraduates">
                    <h2>256 <span> <AiOutlinePlus className='plusIcon' /> </span></h2>
                    <span>Courses Published</span>

                </div>
                <div className="passedGraduates">
                    <h2>2561</h2>
                    <span>Qualified Staff</span>

                </div>
                <div className="passedGraduates">
                    <h2>100</h2>
                    <span> Country Reached</span>

                </div>

            </div>

        </div>
    );
};

export default CourseQuantityInfo;