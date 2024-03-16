import './App.css'
import Navbar from './components/Navbar';
import Headbar from './components/Headbar';
import { Routes, Route } from 'react-router-dom';
import FetchApi from './components/fetchApi';
import Login from './components/Login';
import Signup from './components/Signup';
import Quizz from './components/Quizz';
import PlayerInfo from './components/PlayerInfo';
import SignIn from './components/SignIn';



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/Headbar" element={<Headbar />} />
        <Route path="/singleplayer" element={<FetchApi />} />
        <Route path="/Login" element={< Login />} />
        <Route path="/Signup" element={< Signup />} />
        <Route path="/SignIn" element={< SignIn />} />
        <Route path="/Quizz" element={< Quizz />} />
        <Route path="/profile" element={<PlayerInfo />} />

    

      </Routes>
    </>
  )
}

export default App
