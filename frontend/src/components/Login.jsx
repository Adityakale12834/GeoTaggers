import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { authActions } from "../redux/store";
import { Link } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const history = useNavigate();
    const [inputs , setInputs] = useState({
        email : "",
        password : "", 
    });
    const handleChange = (e) => {
        setInputs(prev => ({
            ...prev,
            [e.target.name] : e.target.value,
        }));
        console.log(e.target.name,"Value",e.target.value);
    }
    const sendRequest = async () => {
        const res = await axios.post("http://localhost:5000/api/login",{
            email : inputs.email,
            password : inputs.password,
        }).catch(err => console.log(err));
        const data = await res.data;
        return data;
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        sendRequest().then(() => dispatch(authActions.login()))
                    .then(() =>history("../home"));
    }

    return (
      
      <section className=" bg-gradient-to-b from-indigo-950 to-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <h1 href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Lets Login
          </h1>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Log in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input onChange={handleChange} value={inputs.email}  type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring--600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required=""></input>
                </div>
                <div>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input onChange={handleChange} value={inputs.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" ></input>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input d="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gradark:ring-offset-gray-8y-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 00" required="" ></input>
                    </div>
                    <div className="ml-3 text-sm">
                      <label  className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-white hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                {console.log(isLoggedIn)}
                <button type="submit" className=" btn-primary w-full text-white bg-indigo-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Dont have an account? <Link to="/" className="font-medium text-white hover:underline dark:text-primary-500">SignIn</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
  