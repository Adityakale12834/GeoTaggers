import './App.css'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD:frontend/src/App.jsx
import FetchApi from './components/fetchApi';
import Login from './components/Login';
import Signup from './components/Signup';
import PlayerInfo from './components/PlayerInfo';
import Quizz from './components/Quizz';
=======
import SinglePlayer from './components/SinglePlayer';
import Signup from './components/Signup';
import PlayerInfo from './components/PlayerInfo';
import Login from './components/Login';
>>>>>>> 76659ab91bcc0b2c39ba34951abbac388f3174d0:src/App.jsx


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
<<<<<<< HEAD:frontend/src/App.jsx
        <Route path="/singleplayer" element={<FetchApi/>} />      
        <Route path="/Login" element={< Login/>} />
        <Route path="/Signup" element={< Signup/>} />
        <Route path="/profile" element={<PlayerInfo/>} />
        <Route path="/Quizz" element={< Quizz/>} />

=======
        <Route path="singleplayer" element={<SinglePlayer />} />      
        <Route path="Signup" element={< Signup/>} />
        <Route path="/profile" element={<PlayerInfo/>} />
        <Route path="Login" element={< Login/>} />
>>>>>>> 76659ab91bcc0b2c39ba34951abbac388f3174d0:src/App.jsx
      </Routes>
    </>
  )
}

export default App
