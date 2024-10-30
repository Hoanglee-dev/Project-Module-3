import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userInfor, setUserInfor] = useState(null);
  // console.log("🚀 ~ UserProvider ~ userInfor:", userInfor);
  const [userLoading, setUserLoading] = useState(false);
  const getInformation = async () => {
    try {
      setUserLoading(true);
      const response = await axios.get(
        "http://localhost:3000/users/get-profile",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUserLoading(false);
      const dataUser = response.data;
      // console.log("🚀 ~ getInformation ~ dataUser:", dataUser);
      setUserInfor(dataUser);
    } catch (error) {
      setUserLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <UserContext.Provider value={{ userLoading, userInfor, setUserInfor }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
