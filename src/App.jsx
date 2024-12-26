import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PastEvents from './pages/PastEvents';

function App() {
  // Define a function to handle event data
  const [events] = useState([
    
    {
        name: 'CSS Workshop',
        description: 'This workshop is designed for beginners to dive into the basics of CSS. Over the course of the event, participants will learn how to create simple, responsive layouts and style their websites with modern CSS techniques, fostering creativity and confidence in web design.',//keep the description brief !!
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
    <div className='main'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/past-events' element={<PastEvents/>}/>
      </Routes>
    </div>
  )
}

export default App;
