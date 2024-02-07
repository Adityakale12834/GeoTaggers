import { Link, Outlet } from "react-router-dom"
import { useDispatch } from "react-redux";
import Card from "./Card";
import { fetchStreetViewData } from "../redux/slices/streetviewSlice";

function Navbar() {
    const dispatch = useDispatch();
    
  return (
    <div className="grid grid-cols-3">
        <div className=" text-4xl font-link text-gray-300 mt-20 ml-20 row-span-3">
            <div className='transition ease-in-out py-5 px-10 hover:text-purple-500'>
<<<<<<< HEAD:frontend/src/components/Navbar.jsx
            <Link to="/singleplayer" onClick={dispatch(fetchStreetViewData())}>SINGLEPLAYER</Link>
=======
            <Link to="/Signup">SINGLEPLAYER</Link>
>>>>>>> 76659ab91bcc0b2c39ba34951abbac388f3174d0:src/components/Navbar.jsx
            </div>
            <div className='py-5 px-10 transition ease-in-out hover:text-purple-500'>
            <Link to="/Login">MULTIPLAYER</Link>
            </div>
            <div className='py-5 px-10 transition ease-in-out hover:text-purple-500'>
            <Link to="/Signup">CLASSIC MAPS</Link>
            </div>
            <hr className="w-80 border-1 py-3"/>
            <div className='py-5  px-10 transition ease-in-out hover:text-purple-500'>
            <Link to="/Quizz">QUIZZ</Link>
            </div>
            
            <div className='py-5 px-10 transition ease-in-out hover:text-purple-500'>
            <Link to="/profile">PROFILE</Link>
            </div>
        </div>
        <Outlet/>
        <div className="font-link text-white text-4xl mt-20 mb-5">SINGLE PLAYER</div>
        <div className="flex text-red-400 row-span-3 col-span-2 ">
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Navbar