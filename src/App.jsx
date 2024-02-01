import './App.css'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import SinglePlayer from './components/SinglePlayer';
import Signup from './components/Signup';
import PlayerInfo from './components/PlayerInfo';
import Login from './components/Login';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="singleplayer" element={<SinglePlayer />} />      
        <Route path="Signup" element={< Signup/>} />
        <Route path="/profile" element={<PlayerInfo/>} />
        <Route path="Login" element={< Login/>} />
      </Routes>
    </>
  )
}

export default App
