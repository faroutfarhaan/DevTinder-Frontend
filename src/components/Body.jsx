import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {BASE_URL} from '../utils/constants'
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice';
const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const fetchUser=async ()=>{
    if(user) return ;
    try{
          const res=await axios.get(BASE_URL+"/profile/view",{
            withCredentials:true
          });
          dispatch(addUser(res.data));
    }catch(err){
      if(err.response?.status===401){
        navigate("/login");
      }
      console.log(err);
    }
  }
    useEffect(
      ()=>{
      fetchUser()
    },[]);
  return (

    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  );
};

export default Body