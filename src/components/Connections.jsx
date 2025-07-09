import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants';
import { useEffect } from 'react';
import { addConnections } from '../utils/connectionsSlice';
import { Link } from 'react-router';

const Connections = () => {
    const connections=useSelector((store)=>store.connections);
    const dispatch=useDispatch();
    const user =useSelector((store)=>store.user);
    
   const fetchConnections=async ()=>{
    try{
          const res=await axios.get(BASE_URL+"/user/connections",{withCredentials:true});
          console.log(res,"data from connection api");
          dispatch(addConnections(res.data?.data));
    }catch(err){

        console.log(err);
    }}
    useEffect(()=>{
        if(user){
            fetchConnections();
        }
    },[user]);
   if(!connections) return <h1>Loading.......</h1> ;
   if(connections.length===0) return <h1 className='justify-center  text-center m-7 '>No connections, Get some buddy!</h1>
  return (<>
     
    <div className='flex justify-start items-center shadow-black shadow rounded-4xl w-max text-4xl text-[#FF416C] font-bold m-5 p-4 '>Connections</div>
    
    <div>
        {connections.map((item)=>{
            const {
                firstName, lastName ,age , photoUrl,  gender
            }=item;
            return(
                
                <div key={item._id} className='shadow-black shadow rounded-full flex p-2 m-4'>
                  <figure className='w-50 justify-start items-center'><img src={photoUrl} alt='user photo' /></figure>
                  <Link to='/display' state={item}><h2 className='text-[#FF416C] text-xl font-bold'>{firstName+" "+lastName}</h2>
                  <p>{age+", "+gender}</p>
                  </Link>
                  
                  <div className='ml-auto flex items-center '>
                  <button className='btn-primary btn justify-end mx-2 rounded-3xl'>remove</button>
                    </div>
                    </div>
                    
            )
        })}
    </div>
    </>
  )
}

export default Connections;