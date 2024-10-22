import React from 'react';

function AvatarUser(props) {
  const avatarUser = props.userInfor
  console.log(avatarUser)
  return (
    <div>
      {/* <div class="relative inline-block mr-7">
        <img src={avatarUser.image} alt="" />

      </div> */}
    </div>
  );
}

export default AvatarUser;