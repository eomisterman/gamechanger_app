import './App.css';
import React, { useState, useEffect } from 'react';
import Event from './components/Event';
import ScheduleApi from './api/Api';

const api = new ScheduleApi();

function App() {
  
  const [schedule, setSchedule] = useState([]);
  const [formatted, setFormatted] = useState({});

  useEffect(() => {
    api.getSchedule().then(result => {
      setSchedule(result);
      setFormatted(formatGames(result));
    })
    .catch(error => {
      console.error(error.message);
    })
  }, [])

  const formatGames = (schedule) => {
    return schedule.reduce((acc, event) => {
      console.log(event.start.datetime);
      const date = new Date(event.start.datetime);
      const key = `${date.toLocaleDateString(
        'en-US',
        { month: 'long', year: 'numeric' }
      )}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(event);
      return acc;
    }, {})
  }

  return (
    <div className="App">
      <h1>Schedule</h1>
      {Object.keys(formatted).map((month, index) => {
        return (
          <div key={index} >
            <h2>{month}</h2>
            <section className="monthEvents">
              {formatted[month].map((event, index) => {
                return (<Event event={event} key={index} />);
              })}
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default App;
