import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BASE_URL } from '../utils/constants';
import axios from 'axios'; // You'll need to add this import

const Profile = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  
  const [isEditing, setIsEditing] = useState(false);
 const [firstName, setFirstName] = useState(null);
const [lastName, setLastName] = useState(null);
const [age, setAge] = useState(null);
const [about, setAbout] = useState(null);
const [photoUrl, setPhotoUrl] = useState(null);
const [gender, setGender] = useState(null);

  const [showToast,setShowToast]=useState(false);
  const handleEdit = () => {
  setFirstName(user.firstName || "");
  setLastName(user.lastName || "");
  setAge(user.age || "");
  setAbout(user.about || "");
  setPhotoUrl(user.photoUrl || "");
  setGender(user.gender || "");
  setIsEditing(true);
};
const handleCancel = () => {
  setIsEditing(false);
  setFirstName(null);
  setLastName(null);
  setAge(null);
  setAbout(null);
  setPhotoUrl(null);
  setGender(null);
};


  const handleSave = async () => {
    try {
      const res = await axios.put(BASE_URL + "/profile/edit", {
        firstName,
        lastName,
        age,
        about,
        photoUrl,
        gender: gender.toLowerCase()
      }, { withCredentials: true });
      
      dispatch(addUser(res.data?.data));
      setIsEditing(false);
      setShowToast(true);
      setTimeout(()=>{
       setShowToast(false);
      },3000);
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) {
    return <div className="min-h-screen  text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#FF416C]">Profile</h1>
          {!isEditing ? (
            <button
              onClick={handleEdit}
              className="btn bg-[#FF416C] hover:bg-[#FF4B2B] text-white px-6 py-2 rounded-full"
            >
              Edit
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="btn bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="btn bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Profile Card */}
        <div className="card bg-[#1a1a1a] shadow-xl">
          <div className="card-body">
            
            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-[#FF416C] ring-offset-2">
                  <img src={user.photoUrl} alt="Profile" />
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              
              {/* First Name */}
              <div>
                <label className="block text-white mb-2">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="input bg-[#333333] text-white w-full"
                  />
                ) : (
                  <div className="p-3 bg-[#333333] rounded text-white">{user.firstName}</div>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-white mb-2">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="input bg-[#333333] text-white w-full"
                  />
                ) : (
                  <div className="p-3 bg-[#333333] rounded text-white">{user.lastName}</div>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-white mb-2">Email</label>
                <div className="p-3 bg-[#333333] rounded text-gray-400">{user.email}</div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-white mb-2">Age</label>
                {isEditing ? (
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="input bg-[#333333] text-white w-full"
                  />
                ) : (
                  <div className="p-3 bg-[#333333] rounded text-white">{user.age}</div>
                )}
              </div>
              {/*gender*/}
               <div>
                <label className="block text-white mb-2">Gender</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="input bg-[#333333] text-white w-full"
                  />
                ) : (
                  <div className="p-3 bg-[#333333] rounded text-white">{user.gender}</div>
                )}
              </div>
              {/* About */}
              <div>
                <label className="block text-white mb-2">About</label>
                {isEditing ? (
                  <textarea
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="textarea bg-[#333333] text-white w-full h-24"
                  />
                ) : (
                  <div className="p-3 bg-[#333333] rounded text-white min-h-[60px]">{user.about}</div>
                )}
              </div>

              {/* Photo URL */}
              {isEditing && (
                <div>
                  <label className="block text-white mb-2">Photo URL</label>
                  <input
                    type="url"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    className="input bg-[#333333] text-white w-full"
                  />
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
  
  <div className="alert alert-success">
    <span>Changes saved.</span>
  </div>
</div>
      )

      }
    </div>
  );
};

export default Profile;