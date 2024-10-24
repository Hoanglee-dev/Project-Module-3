import React, { useEffect, useState } from 'react';
import AvatarUser from '../Common/AvatarUser';
import axios from 'axios';
import { Link } from 'react-router-dom';

const InforUser = () => {
  const [userInfor, setUserInfor] = useState([]);

  const getInformation = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users/get-profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const dataUser = response.data;
      console.log(dataUser);
      setUserInfor(dataUser);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <>

      <h2 className="text-2xl font-bold mb-6 text-gray-300">Thông tin của <span>{userInfor.username}</span></h2>
      <div className="flex items-center mb-1 ">
        <div className="inline-block mr-4">
          <div className=" size-28 bg-green-400 rounded-full flex items-center justify-center al">
            <AvatarUser userInfor={userInfor} />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-300">{userInfor.username}</h3>
          <p className="text-gray-500">{userInfor.dob}</p>
        </div>
      </div>
      <div className='ml-4'>
        <Link
          to="/editprofile"
          className="bg-gray-300 ml-1 hover:bg-gray-400 rounded-xl ring-2 font-serif"
        >
          Edit Profile
        </Link>
      </div>
    </>
  );
};

export default InforUser;
