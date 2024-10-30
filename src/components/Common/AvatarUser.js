import React, { useContext } from "react";
import { UserContext } from "../User/UserContext";

function AvatarUser() {
  const { userInfor } = useContext(UserContext);

  return (
    <>
      {userInfor.image ? (
        <img
          className="rounded-full w-11/12 h-91-67 object-cover"
          src={userInfor.image}
          alt=""
        />
      ) : (
        <img
          className="rounded-full w-11/12 h-91-67 object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMI5YxZE03Vnj-s-sth2_JxlPd30Zy7yEGg&s"
          alt=""
        />
      )}
    </>
  );
}

export default AvatarUser;
