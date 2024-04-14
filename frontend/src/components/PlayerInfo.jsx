import axios from "axios"
import { useEffect, useState } from "react"
axios.defaults.withCredentials = true;

function PlayerInfo(props) {
    const [user, setUser] = useState("");
    const getPlayerInfo = async() => {
      try {
        const response = await axios.get(`http://localhost:5000/player/${props.username._id}`).catch(err => console.log(err));;
        const data = await response.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      getPlayerInfo().then((data) => setUser(data))
    },[]);

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
                        <h1 className="text-3xl font-bold">ADITYA KALE</h1>
                        <div className="py-8">
                        <label className="text-xl p-5">LVL 3</label>
                        <progress id="file" value="60" max="100" className=""> 50% </progress>
                        </div>
                        <h1 className="">XP 3000</h1>
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
                                <h1>90%</h1>
                                </div>
                            <h2>ACCURACY</h2>
                            </div>
                        </div>
                        <div className="my-10 p-10 bg-gray-700 flex justify-center mx-20">
                            <div>
                                <div className="flex justify-center">
                                <h1>3000</h1>
                                </div>
                            <h2>XP</h2>
                            </div>
                        </div>
                        <div className="my-10 p-10 bg-gray-700 flex justify-center mx-20">
                            <div>
                                <div className="flex justify-center">
                                <h1>300 KM</h1>
                                </div>
                            <h2>AVERAGE DISTANCE</h2>
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