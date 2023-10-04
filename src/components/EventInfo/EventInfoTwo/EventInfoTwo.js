import React from 'react';
import './EventInfoTwo.css';
import { LuClock9 } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
// import image from '../../Assets/Image/EventPic/Book.jpg'
// import EventInfoTwo from './EventInfoTwo/EventInfoTwo';
import image from '../../../Assets/Image/EventPic/SingleTeach.jpg'

const EventInfoTwo = () => {
    return (
        <>
            <div className="eventDetails">
                <div className="upcomingEvent">
                    <div className="calender">
                        <p className='date'>17</p>
                        <p>May</p>
                    </div>
                    <div className="addressInfo">
                        <h2>TWAS-COMSTECH Joints Research Grants-2018</h2>
                        <div className="addressHead">
                            <div className="timing">
                                <p><span> <LuClock9 size={14} /> </span>8:00 am - 5:00 pm</p>
                            </div>
                            <div className="buildingAddress">
                                <p><span> <IoLocationSharp size={14} /> </span> London city, wclb uk </p>
                            </div>
                        </div>
                        <div className="btnRegister">
                            <button type='button'>Register</button>
                        </div>

                    </div>

                </div>
                <div className="eventImage">
                    <img src={image} alt="" />

                </div>

            </div>
            <div className="lineHorizontal">
                <span> <hr size={2} /> </span>
            </div>
        </>
    );
};

export default EventInfoTwo;