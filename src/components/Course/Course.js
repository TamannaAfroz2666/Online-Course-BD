import React from 'react';
import './Course.css'

const Course = () => {
    return (
        <div className='courseSection'>
            <div className="courses">
                <h1>Our Popular Courses</h1>
                <div className="lineDirection">
                    <span className='horizontal'>
                        <small className='horizontalSmall'> <hr color="#f04b4b"
                            size="4" /></small>
                        <hr color="#f04b4b"
                            size="4" />
                        <small><hr color="#f04b4b"
                            size="4" /></small>
                    </span>
                </div>
                <div className="shortDescription">
                <p >An online course can be defined as a virtual learning experience organized into a course format. Courses <p className='shortDes'>can vary in their type, from informal to formal, and cover many different topics.</p></p>

                </div>
                
            </div>
            <h1 className='helo'> hello</h1>
        </div>
    );
};

export default Course;