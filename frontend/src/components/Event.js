import React from 'react';
import './Event.css';
import chevRight from './chevron-right.svg';

function Event({ event }) {

    const dateTime = new Date(event.start.datetime);

    const dayOfWeek = dateTime.toLocaleDateString('en-US', {weekday: 'long'}).substring(0, 3).toUpperCase();
    const dayOfMonth = dateTime.getDate();
    const eventTime = dateTime.toLocaleTimeString(
        'en-US',
        {hour: 'numeric', minute: '2-digit', hour12: true}
    );

    return (
        <div className="Event">
            <section className="eventDate">
                <span id="weekday">{dayOfWeek}</span>
                <span id="dayNum">{dayOfMonth}</span>
            </section>
            <section className="eventDetails">
                <span id="opponent">
                    {(event.home_away === "home" ? "vs. " : "@ ") + 
                        event.opponent_name}
                </span>
                <span id="location">at {event.location}</span>
            </section>
            <section className="startTime">
                <span id="time">{eventTime}</span>
                <img id="chevron" src={chevRight} alt="arrow" />
            </section>
        </div>
    );
}

export default Event;