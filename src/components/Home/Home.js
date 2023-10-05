import React from 'react';
import './Home.css'
import BodySection from '../BodySection/BodySection';
import Course from '../Course/Course';
import ChooseUs from '../ChooseUs/ChooseUs';
import CourseQuantityInfo from '../CourseQunantityInfo/CourseQuantityInfo';
import EventInfo from '../EventInfo/EventInfo';
import Registration from '../Registration/RegistrationHead/Registration';
import CourseSupport from '../CourseSupport/CourseSupport';
// import InstructionPage from '../InstrucctionPage/InstructionPage';

const Home = () => {
    return (
        <div>
            <BodySection></BodySection>
            <Course></Course>
            <ChooseUs></ChooseUs>
            <CourseQuantityInfo></CourseQuantityInfo>
            <EventInfo></EventInfo>
            <Registration></Registration>
            <CourseSupport></CourseSupport>
            {/* <InstructionPage></InstructionPage> */}
            
          
        </div>
    );
};

export default Home;