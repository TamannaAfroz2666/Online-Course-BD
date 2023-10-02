import React from 'react';
import './Course.css'
import ParentCard from './ParentCard/ParentCard';
// import Card from './Card/Card';
// import { Card } from 'react-bootstrap';

const Course = () => {
    return (
        <>
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
                <div className="shortDescr">
                <p className='limited'>An online course can be defined as a virtual learning experience organized into a course format. Courses <p className='shortDes'>can vary in their type, from informal to formal, and cover many different topics.</p></p>

                </div>
                
            </div>
           
        </div>
        {/* <Card></Card> */}
        <ParentCard></ParentCard>
        </>
    );
};

export default Course;