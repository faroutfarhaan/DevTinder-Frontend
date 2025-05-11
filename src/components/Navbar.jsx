import React from 'react';
import Logo from './Logo'; // adjust the path if needed
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  return (
    <div>
      <div className="navbar bg-[#111111] text-white shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost  normal-case text-xl flex items-center gap-2" onClick={()=>{return navigate('/')}}>
            <Logo />
            <span className="hidden sm:inline">DevTinder</span>
          </a>
        </div>
       { user && (<div className="flex gap-2">
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
                <a className="justify-between hover:text-[#FF416C]">Profile</a>
              </li>
              <li><a className="hover:text-[#FF416C]">Settings</a></li>
              <li><a className="hover:text-[#FF416C]">Logout</a></li>
            </ul>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default Navbar;
