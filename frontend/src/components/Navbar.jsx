import { Link, Outlet } from "react-router-dom"
import Card from "./Card";
import { useEffect, useState } from "react";
axios.defaults.withCredentials = true;
let firstRender = true;
import axios from "axios";

function Navbar() {
  const [user, setUser] = useState("");

  const refreshToken = async () => {
    const res = await axios
      .get("http://localhost:5000/api/refresh", {
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
      }, 1000 * 28);
      return () => clearInterval(interval);
    }, []);
      return <div>{user && <div className="grid grid-cols-3">
      <div className=" text-4xl font-link text-gray-300 mt-20 ml-20 row-span-3">
          <div className='transition ease-in-out py-5 px-10 hover:text-purple-500'>
          <Link to="/singleplayer" >SINGLEPLAYER {user.username}</Link>
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
          <Link to="/signin">SignIn</Link>
          </div>
      </div>
      <Outlet/>
      <div className="font-link text-white text-4xl mt-20 mb-5">SINGLE PLAYER</div>
      <div className="flex text-red-400 row-span-3 col-span-2 ">
          <Card/>
          <Card/>
          <Card/>
      </div>
  </div>}</div>
}

export default Navbar