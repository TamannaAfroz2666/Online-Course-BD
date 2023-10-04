import React from 'react';
import './EventInfo.css'

const EventInfo = () => {
    return (
        <div className='eventInfo'>
            <div className="eventInfoMain">
                <h1>Upcoming Event</h1>
                <div className="horizontalEventInfo">
                    <hr color='orange' size='4' className='firstInfo' />
                    <hr color='orange' size='4' className='secondInfo' />
                    <hr color='orange' size='4' className='firstInfo' />
                </div>

                <div className="upcomingEvent">
                    <div className="calender">
                        <p className='date'>02</p>
                        <p>March</p>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default EventInfo;
