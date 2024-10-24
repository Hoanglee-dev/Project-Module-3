import React from 'react';
import InforUser from './InforUser';
import PostCreation from './PostCreation';

const Profile = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-28 p-6 dark:bg-gray-800/40 bg-customGray shadow-2xl rounded-2xl">
      <InforUser />
      <div className='mt-8'>
        <PostCreation />
      </div>
    </div>
  );
};

export default Profile;
