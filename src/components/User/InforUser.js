import React, { useContext, useEffect } from "react";
import AvatarUser from "../Common/AvatarUser";
import { UserContext } from "./UserContext";

const InforUser = () => {
  const { userInfor, userLoading } = useContext(UserContext);
  console.log("🚀 ~ InforUser ~ userLoading:", userLoading);
  console.log("🚀 ~ InforUser ~ userInfor:", userInfor);

  useEffect(() => {
    // This will run whenever `userInfor` changes
    // console.log("userInfor has updated", userInfor);
  }, []);
  return (
    <>
      {userInfor && !userLoading && (
        <>
          <h2 className="text-2xl font-bold mb-6 text-gray-300">
            Thông tin của <span>{userInfor.username}</span>
          </h2>
          <div className="flex flex-col items-center justify-center mb-1 ">
            <div className=" flex items-center justify-center">
              <div className=" size-28 bg-green-400 rounded-full flex items-center justify-center al">
                <AvatarUser userInfor={userInfor} />
              </div>
            </div>
            <div>
              <h3 className="flex flex-col items-center justify-center  text-xl font-semibold text-gray-300">
                {userInfor.username}
              </h3>
              <p className="text-gray-500">{userInfor.dob}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default InforUser;
