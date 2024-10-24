import React from 'react';

function AvatarUser({ userInfor }) {

  return (
    <img className="rounded-full w-11/12 h-11/12 object-cover" src={userInfor.image} alt="" />
  );
}

export default AvatarUser;