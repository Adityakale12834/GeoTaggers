import './App.css'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import FetchApi from './components/fetchApi';
import Login from './components/Login';
import Signup from './components/Signup';
import PlayerInfo from './components/PlayerInfo';
import Quizz from './components/Quizz';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/singleplayer" element={<FetchApi/>} />      
        <Route path="/Login" element={< Login/>} />
        <Route path="/Signup" element={< Signup/>} />
        <Route path="/profile" element={<PlayerInfo/>} />
        <Route path="/Quizz" element={< Quizz/>} />

      </Routes>
    </>
  )
}

export default App
