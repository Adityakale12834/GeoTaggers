import './App.css'
import Navbar from './components/Navbar';
import Headbar from './components/Headbar';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FetchApi from './components/fetchApi';
import Login from './components/Login';
import Signup from './components/Signup';
import Quizz from './components/Quizz';
import PlayerInfo from './components/PlayerInfo';
import SignIn from './components/SignIn';
axios.defaults.withCredentials = true;
let firstRender = true;
import axios from "axios";



function App() {
  const [user, setUser] = useState("");

  const refreshToken = async () => {
    const res = await axios.get("http://localhost:5000/api/refresh", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

    const sendRequest = async() => {
      const res = await axios.get("http://localhost:5000/api/user",{
        withCredentials : true,
      }).catch(err => console.log(err));
      const data = await res.data;
      return data;
    }
    
    useEffect(() => {
      if (firstRender) {
        firstRender = false;
        sendRequest().then((data) => setUser(data.user));
      }
      let interval = setInterval(() => {
        refreshToken().then((data) => setUser(data.user));
      }, 1000 * 60 * 50);
      return () => clearInterval(interval);
    }, []);
  return (
    <>
      <Routes>
      {console.log(user)}
        <Route path="/home" element={<Navbar id={user} />} />
        <Route path="/singleplayer" element={<FetchApi user={user} />} />
        <Route path="/Login" element={< Login />} />
        <Route path="/" element={< SignIn />} />
        <Route path="/Quizz" element={< Quizz />} />
        <Route path="/profile" element={<PlayerInfo username={user} />} />
      </Routes>
    </>
  )
}

export default App;
