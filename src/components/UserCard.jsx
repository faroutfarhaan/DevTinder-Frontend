import React from 'react'

import axios from 'axios';
const UserCard = (item) => {
console.log(item);
const {firstName,lastName,age,photoUrl,about,gender}=item.user;
const handleReq=async ()=>{
    const id=item.user._id;
    try{
          const res=await axios.post("/request/send/pending/"+id,{withCredentials:true});
          console.log(res.data);
    }catch(err){
        console.log(err);
    }
    
}
  return (
    <div className="card  m-4 shadow shadow-black max-w-sm py-5 rounded-2xl shadow-lg " >
            <figure>
                <img src={photoUrl} alt='photo'/>
            </figure>
           <div className='px-4 '>
            <h1 className='text-[#FF416C] font-bold text-xl'>{firstName+" "+lastName}</h1>
            <h3>{age+". "+gender}</h3>
            <p>{about}</p>
            </div>
            <div className='flex justify-end px-6'>
            <button className='btn w-4 rounded-xl hover:bg-[#FF4B2B] bg-[#FF416C] items-center justify-center px-10 '
            onClick={handleReq}>Add</button>
</div>

    </div>
  )
}

export default UserCard