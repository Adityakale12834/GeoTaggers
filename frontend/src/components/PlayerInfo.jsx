import axios from "axios"
import { useEffect, useState } from "react"
axios.defaults.withCredentials = true;

function PlayerInfo() {
    const [user, setUser] = useState("");
    const [player, setPlayer] = useState("");


  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user", {
          withCredentials: true, // Include credentials for authenticated requests
        });
        const data = await res.data;
        console.log("this is user info",data);
        setUser(data.user);
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    };

    getUserInfo();
  }, []); 


  useEffect(() => {
    const getPlayerStats = async () => {
      if (!user._id) { 
        return; 
      }

      try {
        const res = await axios({
          method: 'get',
          url: `http://localhost:5000/player/${user._id}` // Assuming ID goes in URL path
      });
        setPlayer(res);
        console.log(res);
      } catch (err) {
        console.error("Error fetching player stats:", err);
      }
    };
    getPlayerStats();
  }, [user]);
    return (
        <>
        <div className="">
            <div className="grid grid-rows-6 h-4/6 grid-flow-col gap-4 pt-32">
                <div className="row-span-6 h-4/6 mt-24 ml-24 flex justify-end items-center">
                    <div className="overflow-hidden">
                    <img src="/Profile_Icons/1.png" alt="this is the image" className="h-64"/>
                    <div className="font-link text-3xl p-4 text-gray-300">
                        edit Image
                    </div>
                    </div>
                </div>
                <div className="col-span-3 h-4/6 row-span-6 mt-24 font-link pl-6 text-gray-200">
                    <div>
                        <p className="text-sm font-bold"></p>
                        <h1 className="text-3xl font-bold">{user.username}</h1>
                        <div className="py-8">
                        <label className="text-xl p-5">level</label>
                        <progress id="file" value="32" max="100" className=""></progress>
                        </div>
                    </div>
                    <hr className="w-96 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                </div>
            </div>
            <hr className=" my-3 mx-28 bg-gray-100 border rounded md:my-10 dark:bg-gray-600"/>
            <div className="flex justify-center">
                <div className="uppercase text-gray-200 font-link">
                <h1 className="text-4xl font-link ml-96 pl-24">Statistics</h1>
                    <div className="flex justify-center">
                        <div className="my-10 p-10 bg-gray-700 flex justify-center mx-20">
                            <div>
                                <div className="flex justify-center">
                                <h1>{player.data.message.TotalGames}</h1>
                                </div>
                            <h2>completed games</h2>
                            </div>
                        </div>
                        <div className="my-10 p-10 bg-gray-700 flex justify-center mx-20">
                            <div>
                                <div className="flex justify-center">
                                <h1>6</h1>
                                </div>
                            <h2>completed games</h2>
                            </div>
                        </div>
                        <div className="my-10 p-10 bg-gray-700 flex justify-center mx-20">
                            <div>
                                <div className="flex justify-center">
                                <h1>6</h1>
                                </div>
                            <h2>completed games</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="uppercase text-gray-200 font-link">
                <h1 className="text-4xl font-link ml-96 pl-24">Statistics</h1>
                    <div className="flex justify-center">
                        <div className="my-10 p-10 bg-gray-700 flex justify-center mx-20">
                            <div>
                                <div className="flex justify-center">
                                <h1>6</h1>
                                </div>
                            <h2>completed games</h2>
                            </div>
                        </div>
                        <div className="my-10 p-10 bg-gray-700 flex justify-center mx-20">
                            <div>
                                <div className="flex justify-center">
                                <h1>6</h1>
                                </div>
                            <h2>completed games</h2>
                            </div>
                        </div>
                        <div className="my-10 p-10 bg-gray-700 flex justify-center mx-20">
                            <div>
                                <div className="flex justify-center">
                                <h1>6</h1>
                                </div>
                            <h2>completed games</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
      )
}

export default PlayerInfo