import React from 'react';
import InforUser from './InforUser';
import PostCreation from './PostCreation';
import UserProvider from './UserContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="w-1/3 mx-auto mt-28 p-6 dark:bg-gray-800/40 bg-customGray shadow-2xl rounded-2xl ">
      <div className='flex flex-col justify-center items-center'>
        <InforUser />
      </div>
      {/* <div className='flex justify-end'>
        <Link
          to="/edit-profile"
          className="bg-gray-300 ml-1 hover:bg-gray-400 rounded-xl ring-2 font-serif"
        >
          Edit Profile
        </Link>
      </div> */}
      <div className='flex justify-end'>
        <Link
          to="/edit-profile"
          className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105"
        >
          Edit Profile
        </Link>
      </div>

    </div>
  );
};

export default Profile;
