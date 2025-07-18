import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants';
import { useEffect } from 'react';
import { addConnections } from '../utils/connectionsSlice';
import { Link } from 'react-router';
import NoConnections from './NoConnections';

import RequestShimmer from '../shimmers/RequestShimmer';

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
   if(!connections) return <RequestShimmer/> ;
   if(connections.length===0) return <NoConnections/>
  return (<>
     
    <div className='flex justify-start items-center shadow-black shadow rounded-4xl w-max text-4xl text-[#FF416C] font-bold m-5 p-4 '>Connections</div>
    
    <div>
        {connections.map((item)=>{
            const {
                firstName, lastName ,age , photoUrl,  gender,_id
            }=item;
            return(
                
                <div key={item._id} className='shadow-black shadow rounded-full flex flex-row gap-4 p-2 my-4 mx-16'>
                  <figure className='  rounded-full justify-start items-center'><img className=' w-20 h-20 rounded-full' src={photoUrl} alt='user photo' /></figure>
                  <Link to='/display' state={item}><h2 className='text-[#FF416C] text-3xl font-bold'>{firstName+" "+lastName}</h2>
                  <p>{age+", "+gender}</p>
                  </Link>
                  
                  <div className='ml-auto flex items-center '>
                  <Link to={"/chat/"+_id}><button className='btn-primary btn justify-end mx-2 rounded-3xl'>Chat</button></Link>
                    </div>
                    </div>
                    
            )
        })}
    </div>
    </>
  )
}

export default Connections;