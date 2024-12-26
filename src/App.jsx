import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UpcomingEventCard from './components/UpcomingEventCard'; // Import the UpcomingEventCard component

function App() {
  // Define a function to handle event data
  const [events] = useState([
    
    {
        name: 'CSS Workshop',
        description: 'This workshop is designed for beginners to dive into the basics of CSS. Over the course of the event, participants will learn how to create simple, responsive layouts and style their websites with modern CSS techniques, fostering creativity and confidence in web design.',
        date: '2024-12-25',
        time: '10:00 AM',
        venue: 'GICT 420',
        teamsize: 'Individual',
      }
      
    ,
    
      {
        name: 'Typing Competition',
        description: 'Join us for an exciting and challenging Typing Competition! This event is designed to test your typing speed and accuracy in a fun and competitive environment. Participants will have the chance to compete against others and showcase their typing skills. Whether you’re a seasoned typist or just starting out, this event will push you to improve and reach new speeds. Great prizes await the fastest typists!',
        date: '2024-12-28',
        time: '02:00 PM',
        venue: 'GICT 207-208',
        teamsize: 'Individual'
      }
      
    
  ]);


  return (
    <>
      <Navbar />
      <div className="event-list">
        {/* Render UpcomingEventCard for each event */}
        {events.map((event, index) => (
          <UpcomingEventCard
            key={index}
            name={event.name}
            description={event.description}
            date={event.date}
            time={event.time}
            venue={event.venue}
            teamsize={event.teamsize}
          />
        ))}
      </div>
  
     
    </>
  );
}

export default App;
