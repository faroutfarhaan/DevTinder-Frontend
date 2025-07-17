import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addfeed } from '../utils/feedSlice'
import { useNavigate } from 'react-router-dom'
import UserCard from './UserCard'
import UserCardShimmer from '../shimmers/UserCardShimmer'
import NoFeed from './NoFeed'

const Feed = () => {
    const feed = useSelector((store) =>store.feed);
    const [currentIndex,setCurrentIndex]=useState(0);
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
   
      
    const feedArray=feed?.feed || [];
    const handleUserResponse = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  return (
        
    <div className=' text-white  rounded-4xl '>
{
 
      feedArray.length  > 0 && currentIndex < feedArray.length ? (
        
          <UserCard key={feedArray[currentIndex].id}
          user={feedArray[currentIndex]}
          onRespond={handleUserResponse} />
        
      ): feed && feedArray.length === 0 ? (
        <NoFeed />
      ) : feed && currentIndex >= feedArray.length ? (
        <NoFeed />
      ) 
       : (
        <div className='flex justify-center'>
        <UserCardShimmer/>
        </div>
      )
}
     
    </div>
    
  )
};

export default Feed;