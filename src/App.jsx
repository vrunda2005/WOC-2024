import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PastEvents from './pages/PastEvents';

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/past-events' element={<PastEvents/>}/>
      </Routes>
    </>
  )
}

export default App