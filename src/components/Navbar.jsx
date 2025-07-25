import React from 'react';
import Logo from './Logo'; // adjust the path if needed
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { Link } from 'react-router-dom';
import {BASE_URL} from '../utils/constants';
import axios from 'axios';
import { removeAllRequests } from '../utils/requestsSlice';
import { removeFeed } from '../utils/feedSlice';
import {removeConnections} from '../utils/connectionsSlice';
const Navbar = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);
  const handleLogout= async ()=>{
    try{
      await axios.post(BASE_URL+"/logout",{},{withCredentials:true});
      localStorage.removeItem('token');
      dispatch(removeUser());
      dispatch(removeAllRequests());
      dispatch(removeFeed());
      dispatch(removeConnections());
      return navigate('/login');
    }
    catch(error){console.log(error);
    dispatch(removeUser());
    dispatch(removeAllRequests());
      dispatch(removeFeed());
      dispatch(removeConnections());
      return navigate('/login');}
  }
  return (
    <div>
      <div className="navbar bg-[#111111] text-[#FF416C] shadow-sm">
        <div className="flex-1">
          <Link to='/' className="  normal-case text-xl flex justify-items-center gap-2" >
            <Logo />
            <span className="hidden font-semibold sm:inline">DevTinder</span>
         </Link>
        </div>
       { user && (<div className="flex  gap-2 ">
          <p className='font-semibold normal-case text-xl flex items-center text-[#FF416C]'>Welcome, {user.firstName}</p>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-[#FF416C] transition">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-[#1a1a1a] text-white rounded-box z-1">
              <li>
                <Link to='/profile' className="justify-between hover:text-[#FF416C]">Profile</Link>
              </li>
              <li><Link to='/connections'  className="hover:text-[#FF416C]">Connections</Link></li>
              <li><Link to='/requests'  className="hover:text-[#FF416C]">Requests</Link></li>
              <li><a onClick={handleLogout} className="hover:text-[#FF416C]">Logout</a></li>
            </ul>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default Navbar;
