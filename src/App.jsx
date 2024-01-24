import './App.css'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import SinglePlayer from './components/SinglePlayer';
import Login from './components/Login';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="singleplayer" element={<SinglePlayer />} />      
        <Route path="Login" element={< Login/>} />
        
      
      </Routes>
     
    </>
  )
}

export default App
