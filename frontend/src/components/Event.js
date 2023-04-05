import React from 'react';
import './Event.css';

function Event({ event }) {

    const dateTime = new Date(event.start.datetime);

    const dayOfWeek = dateTime.toLocaleDateString('en-US', {weekday: 'long'});
    const dayOfMonth = dateTime.getDate();
    const eventTime = dateTime.toLocaleTimeString(
        'en-US',
        {hour: 'numeric', minute: '2-digit', hour12: true}
    );

    return (
        <div className="Event">
            <section className="eventDate">
                <p>{dayOfWeek}</p>
                <p>{dayOfMonth}</p>
            </section>
            <section className="eventDetails">
                <p>{(event.home_away === "home" ? "vs " : "@ ") + 
                event.opponent_name}</p>
                <p>at {event.location}</p>
            </section>
            <section className="startTime">
                <p>{eventTime}</p>
                <img src="" alt="arrow" />
            </section>
        </div>
    );
}

export default Event;