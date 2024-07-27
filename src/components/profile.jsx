import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const {user}= useSelector((state)=>state.user)
  console.log(user);
    const [firstname,setfirstname] = useState(user?.firstname ||"")
    const [lastname,setlastname] = useState(user?.lastname || "")
    const [gender,setgender] = useState(user?.gender|| "")
    const [email,setemail] = useState(user?.email || "")
    const [city,setcity] = useState(user?.city||"")
    const [contact,setcontact] = useState(user?.contact || "")
  
const handleForm= (e)=>{
  e.preventDefault()
}
 

  
  

  return (
    <div className="container mx-auto my-10 pt-[5vw] p-5 bg-white shadow-md rounded-lg max-w-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Personal details</h2>
      <form onSubmit={handleForm}>
        <div className="mb-4">
          <label className="block text-gray-700">First name</label>
          <input
            type="text"
            name="firstName"
            onChange={(e)=>setfirstname(e.target.value)}
            value={firstname}
           
            className="w-full p-2 border border-gray-300 rounded mt-1"
           
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last name </label>
          <input
            type="text"
            name="lastName"
            onChange={(e)=>setlastname(e.target.value)}
            value={lastname}
         
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact number</label>
          <div className="flex">
            <input
              type="text"
              value="+91"
              readOnly
              className="p-2 border border-gray-300 rounded-l mt-1"
            />
            <input
              type="text"
              name="contactNumber"
              value={contact}
              onChange={(e)=>setcontact(e.target.value)}
             
              className="w-full p-2 border border-gray-300 rounded-r mt-1"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Current city</label>
          <input
            type="text"
            name="currentCity"
           value={city}
           onChange={(e) => setcity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <div className="flex gap-4 mt-2">
            <button
              type="button"
            
              className={`py-2 px-4 rounded-full flex items-center gap-2 ${
              gender === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              Female
            </button>
            <button
              type="button"
              
              className={`py-2 px-4 rounded-full flex items-center gap-2 ${
                gender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              Male
            </button>
            <button
              type="button"
        
              className={`py-2 px-4 rounded-full flex items-center gap-2 ${
               gender === 'Others' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              Others
            </button>
          </div>
        </div>
        <div className="text-right">
          <button className="py-2 px-4 bg-blue-500 text-white rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
