import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName,setFirstName]=useState();
  const [lastName,setLastName]=useState();
  const [age,setAge]=useState();
  const [phone,setPhone]=useState();
  const [isLogin,setIsLogin]=useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL + "/login", {
        email,
        password
      }, { withCredentials: true });
      console.log(res.data);
      dispatch(addUser(res.data));
      return navigate("/");

    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  }
  const handleSignup=async ()=>{
    try{
          const res=await axios.post(BASE_URL+"/signup",{
            firstName,
            lastName,
            age,
            phone,
            email,
            password

          },{withCredentials:true});
          if(res.status!=400){
            console.log(res);
          }
    }catch(err){
      setError(err.response.data);
           console.log(err);
           
    }
  }

  return (
    
    <div className="min-h-screen flex justify-center items-center  bg-[#111111] px-4 py-10">
      <div className="card card-border bg-gradient-to-r from-[#3B82F6] to-[#9333EA] w-full sm:w-96 md:w-96 lg:w-96 xl:w-96 p-6 rounded-xl shadow-lg max-w-xs">
        <div className="card-body text-white">
          <h2 className="card-title text-center text-3xl font-semibold text-[#FF416C] sm:text-2xl lg:text-3xl">
            {isLogin?"Welcome, Back!":"Let's get started"}
          </h2>
          {!isLogin && (<>
            <label className="input bg-[#333333] text-white rounded-md mb-6 w-full">
            <svg
  className="h-[1em] opacity-50"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87m9-3.13a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" />
            </svg>

            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              minLength="2"
              pattern="(?=.*[a-z])(?=.*[A-Z])"
              title="Must be more than 2 characters"
              className="bg-transparent text-white w-full p-3"
            />
 
          </label>
          <label className="input bg-[#333333] text-white rounded-md mb-6 w-full">
          <svg
  className="h-[1em] opacity-50"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87m9-3.13a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" />
            </svg>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              minLength="2"
              pattern="(?=.*[a-z])(?=.*[A-Z])"
              // title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              className="bg-transparent text-white w-full p-3"
            />
          </label>
          <label className="input bg-[#333333] text-white rounded-md mb-6 w-full">
  <svg
    className="h-[1em] opacity-50"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
  </svg>
  <input
    type="number"
    required
    value={age}
    onChange={(e) => setAge(e.target.value)}
    placeholder="Age"
    min="18"
    max="100"
    className="bg-transparent text-white w-full p-3"
  />
          </label>

          
          <label className="input bg-[#333333] text-white rounded-md mb-6 w-full">
  <svg
    className="h-[1em] opacity-50"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92V21a2 2 0 0 1-2.18 2 19.91 19.91 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 12.8 19.91 19.91 0 0 1 0 4.18 2 2 0 0 1 2 2h4.09a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.12 10.6a16 16 0 0 0 6.29 6.29l1.96-1.22a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
  </svg>
  <input
    type="tel"
    required
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    placeholder="Phone Number"
    pattern="[6-9]{1}[0-9]{9}"
    maxLength="10"
    minLength="10"
    className="bg-transparent text-white w-full p-3"
  />
          </label>

           </>)}
         <> <label className="input bg-[#333333] text-white rounded-md mb-4 w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mail@site.com"
              required
              className="bg-transparent text-white w-full p-3"
            />
          </label>

          <label className="input bg-[#333333] text-white rounded-md mb-6 w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              className="bg-transparent text-white w-full p-3"
            />
          </label> </>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="card-actions justify-center">
            <button
              className="btn btn-primary bg-[#FF416C] hover:bg-[#FF4B2B] text-white w-full py-3 rounded-lg"
              onClick={isLogin?handleLogin:handleSignup}
            >
              {isLogin?"Login":"SignUp"}
            </button>
            
          </div>
          <p
            className=" text-center cursor-pointer py-2"
            onClick={() => setIsLogin((value) => !value)}
          >
            {isLogin
              ? "New user ? signup here"
              : "Existing User ? Login here"}
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default Login;
