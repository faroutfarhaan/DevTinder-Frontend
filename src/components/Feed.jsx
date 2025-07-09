import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addfeed } from '../utils/feedSlice'
import { useNavigate } from 'react-router-dom'
import UserCard from './UserCard'

const Feed = () => {
    const feed = useSelector((store) =>store.feed);
    
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector((store)=>store.user);
    const getFeed=async ()=>{
      console.log("called getFeed!");
      console.log("Current user state:", user); // Debug user state
      // Only redirect if user is explicitly null (not just falsy)
      if(user === null) {
        console.log("No user found, redirecting to login");
        return navigate("/login");
      }
        if(feed) return;
      try{  const res=await axios.get(BASE_URL+"/feed",{withCredentials:true});
        console.log(res.data);
        dispatch(addfeed(res.data));
    }
        catch(err){
            console.log(err);

        }
    }
    useEffect(()=>{
      if(user){
        getFeed();}
    },[user]);
   
      
    const feedArray=useSelector((store)=>store.feed?.feed) || [];
  return (
        
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white m-4 rounded-4xl flex'>
{
 
      feedArray.length > 0 ? (
        feedArray.map((item) => (
          <UserCard key={item.id} user={item} />
        ))
      ) : (
        <h1>You are all caught up.</h1>
      )
}
     
    </div>
    
  )
};

export default Feed;