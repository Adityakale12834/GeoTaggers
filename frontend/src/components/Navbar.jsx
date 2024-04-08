import { Link, Outlet } from "react-router-dom"
import Card from "./Card";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authActions } from "../redux/store";
axios.defaults.withCredentials = true;

function Navbar(props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const sendLogoutReq = async () => {
    const res = await axios.post("http://localhost:5000/api/logout", null, {
      withCredentials: true,
    });
    if (res.status == 200) {
      return res;
    }
    return new Error("Unable TO Logout. Please try again");
  };
  const handleLogout = () => {
    sendLogoutReq().then(() => dispatch(authActions.logout()));
  };
      return <div><div className="grid grid-cols-3">
      <div className=" text-4xl font-link text-gray-300 mt-20 ml-20 row-span-3">
          <div className='transition ease-in-out py-5 px-10 hover:text-purple-500'>
          <Link to="/singleplayer" >SINGLEPLAYER</Link>
          </div>
          <div className='py-5 px-10 transition ease-in-out hover:text-purple-500'>
          <Link to="/">MULTIPLAYER</Link>
          </div>
          <div className='py-5 px-10 transition ease-in-out hover:text-purple-500'>
          <Link to="/">CLASSIC MAPS</Link>
          </div>
          <hr className="w-80 border-1 py-3"/>
          <div className='py-5 px-10 transition ease-in-out hover:text-purple-500'>
          <Link to="/Quizz">QUIZZ</Link>
          </div>
          <div className='py-5 px-10 transition ease-in-out hover:text-purple-500'>
          <Link to="/profile">PROFILE</Link>
          </div>
          <div className='py-5 px-10 transition ease-in-out hover:text-purple-500'>
            {console.log(isLoggedIn)}
          <Link to="/login" onClick={handleLogout}>LOGOUT</Link>
          </div>
      </div>
      <Outlet/>
      <div className="font-link text-white text-4xl mt-20 mb-5">SINGLE PLAYER</div>
      <div className="flex text-red-400 row-span-3 col-span-2 ">
          <Card/>
          <Card/>
          <Card/>
      </div>
  </div></div>
}

export default Navbar