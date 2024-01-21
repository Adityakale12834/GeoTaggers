import './App.css'
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import SinglePlayer from './components/SinglePlayer';

function App() {

  return (
    <>
        <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="singleplayer" element={<SinglePlayer/>} />
      </Routes>
    </>
  )
}

export default App
