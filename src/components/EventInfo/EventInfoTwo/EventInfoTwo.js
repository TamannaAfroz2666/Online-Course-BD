import React from 'react';
import './EventInfoTwo.css';

const EventInfoTwo = () => {
    return (
        <div>
               <div className='eventInfo'>
            <div className="eventInfoMain">
                <h1>Upcoming Event</h1>
                <div className="horizontalEventInfo">
                    <hr color='orange' size='4' className='firstInfo' />
                    <hr color='orange' size='4' className='secondInfo' />
                    <hr color='orange' size='4' className='firstInfo' />
                </div>
                <div className="eventDetails">
                    <div className="upcomingEvent">
                        <div className="calender">
                            <p className='date'>02</p>
                            <p>March</p>
                        </div>
                        <div className="addressInfo">
                            <h2>Call for applications for the 2018 Letten Prize</h2>
                            <div className="addressHead">
                                <div className="timing">
                                    <p><span> <LuClock9 size={14} /> </span>8:00 am - 5:00 pm</p>
                                </div>
                                <div className="buildingAddress">
                                    <p><span> <IoLocationSharp  size={14}/> </span> London city, wclb uk </p>
                                </div>
                            </div>
                            <div className="btnRegister">
                            <button type='button'>Register</button>
                            </div>
                           
                        </div>

                    </div>
                    <div className="eventImage">
                        <img src={image1} alt="" />

                    </div>

                </div>
                <div className="lineHorizontal">
                    <span> <hr size={2} /> </span>
                </div>
            </div>
         

        </div>
        </div>
    );
};

export default EventInfoTwo;