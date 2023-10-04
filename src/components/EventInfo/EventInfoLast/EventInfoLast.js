import React from 'react';
import './EventInfoLast.css';
import groupImage from '../../../Assets/Image/EventPic/groupTeach.jpg';
import { LuClock9 } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";

const EventInfoLast = () => {
    return (
        <>
        <div className="eventDetails">
            <div className="upcomingEvent">
                <div className="calender">
                    <p className='date'>22</p>
                    <p>June</p>
                </div>
                <div className="addressInfo">
                    <h2>Call for Nominations 2018 TUBA Academy Prizes</h2>
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
                <img src={groupImage} alt="" />

            </div>

        </div>
        <div className="lineHorizontal">
            <span> <hr size={2} /> </span>
        </div>
    </>

    );
};

export default EventInfoLast;