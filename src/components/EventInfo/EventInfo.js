import React from 'react';
import './EventInfo.css'

const EventInfo = () => {
    return (
        <div className='eventInfo'>
            <div className="eventInfoMain">
                <h1>Upcoming Event</h1>
                <div className="horizontal">
                    <hr color='orange' size='4' className='first' />
                    <hr color='orange' size='4' className='second' />
                    <hr color='orange' size='4' className='first' />
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
