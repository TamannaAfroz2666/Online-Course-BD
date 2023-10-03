import React from 'react';
import './Home.css'
import BodySection from '../BodySection/BodySection';
import Course from '../Course/Course';
import ChooseUs from '../ChooseUs/ChooseUs';
import CourseQuantityInfo from '../CourseQunantityInfo/CourseQuantityInfo';
import EventInfo from '../EventInfo/EventInfo';

const Home = () => {
    return (
        <div>
            <BodySection></BodySection>
            <Course></Course>
            <ChooseUs></ChooseUs>
            <CourseQuantityInfo></CourseQuantityInfo>
            <EventInfo></EventInfo>
            
          
        </div>
    );
};

export default Home;