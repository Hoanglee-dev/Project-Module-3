import React from 'react';

function AvatarUser({ userInfor }) {

  return (
    <img className="rounded-full w-11/12 h-91-67 object-cover" src={userInfor.image} alt="" />
  );
}

export default AvatarUser;