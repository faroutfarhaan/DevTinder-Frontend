import React from 'react'
import UserCard from './UserCard'
import { useLocation } from 'react-router'

const DisplayUser = () => {
    const location=useLocation();
    const {user} =location.state || {};
    console.log(user,"from display")
    const {firstName,lastName,age,gender,about,photoUrl}=user;
  return (
    <div className="card  m-4 bg-[#111111] max-w-sm py-5 rounded-2xl shadow-lg " >
            <figure>
                <img src={photoUrl} alt='photo'/>
            </figure>
           <div className='px-4 '>
            <h1 className='text-[#FF416C]'>{firstName+" "+lastName}</h1>
            <h3>{age+", "+gender}</h3>
            <p>{about}</p>
            </div>
           
</div>

    
  )
}

export default DisplayUser;