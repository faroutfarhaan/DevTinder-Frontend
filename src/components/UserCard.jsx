import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const UserCard = (item) => {
  const { firstName, lastName, age, photoUrl, about, gender } = item.user;

  const handleReq = async (status) => {
    const id = item.user._id;
    try {
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${id}`,
        null,
        { withCredentials: true }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-[90%] w-full max-w-md bg-[#111111] shadow-lg rounded-2xl flex flex-col">
        
        {/* Image */}
        <figure className="h-full   w-full overflow-hidden rounded-t-2xl">
          <img src={photoUrl} alt="photo" className="w-full h-full object-cover" />
        </figure>

        {/* Info */}
        <div className="flex flex-col justify-between h-[40%] px-6 py-2">
          <div>
            <h1 className="text-[#FF416C] font-bold text-3xl">{firstName + ' ' + lastName}</h1>
            <h3 className="text-lg mt-1">{age + ', ' + gender}</h3>
            <p className="text-gray-400 mt-1">{about}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-4">
            <button
              className="btn px-6 py-2 bg-green-400 text-white rounded-full hover:bg-white hover:text-green-500 border border-green-400 mx-2"
              onClick={() => handleReq('interested')}
            >
              Interested
            </button>
            <button
              className="btn px-6 py-2 bg-[#FF416C] text-white rounded-full hover:bg-white hover:text-[#FF416C] border border-[#FF416C] mx-2"
              onClick={() => handleReq('ignore')}
            >
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
