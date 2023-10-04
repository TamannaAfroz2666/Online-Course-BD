import React from 'react';
import './Home.css'
import BodySection from '../BodySection/BodySection';
import Course from '../Course/Course';
import ChooseUs from '../ChooseUs/ChooseUs';
import CourseQuantityInfo from '../CourseQunantityInfo/CourseQuantityInfo';
import EventInfo from '../EventInfo/EventInfo';
import Registration from '../Registration/RegistrationHead/Registration';

const Home = () => {
    return (
        <div>
            <BodySection></BodySection>
            <Course></Course>
            <ChooseUs></ChooseUs>
            <CourseQuantityInfo></CourseQuantityInfo>
            <EventInfo></EventInfo>
            <Registration></Registration>
            
          
        </div>
    );
};

export default Home;