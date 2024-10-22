import React, { useEffect, useState } from 'react';
import AvatarUser from '../Common/AvatarUser';
import axios from 'axios';

const Profile = () => {
  // Giả lập dữ liệu người dùng
  const user = {
    name: 'abc',
    email: 'johndoe@example.com',
  };

  const [userInfor, setUserInfor] = useState([])
  const getInfomation = async () => {
    // try {
    //   const response = await baseAxios(METHOD_HTTP.GET, "/users/get-profile")
    //   // const response = await axios.get("/users/get-profile")
    //   console.log(response.data)
    //   return response.data
    // }
    // catch (e) {
    //   alert(e.message)
    // await axios.get('http://localhost:3000/users/get-profile', {
    //   //headers này thường được sử dụng để xác thực yêu cầu 
    //   // giống như phải cầm theo cái chìa ở local để thực hiện bất kì thao tác
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`
    //   }
    // }).then(response => setUserInfor(response.data))
    //   .catch(error => alert(error.message));
    await axios.get('http://localhost:3000/users/get-profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => console.log(response.data))
      .catch(error => console.error(error));

  }

  useEffect(() => {
    getInfomation()
  }, [])

  return (
    <div className="max-w-screen-md mx-auto mt-28 p-6 bg-white shadow-2xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-6">Thông tin người dùng</h2>
      <div className="flex items-center mb-6">
        <AvatarUser />
        {/* <img
          className="w-24 h-24 rounded-full object-cover mr-4"
          src={user.avatar}
          alt="Avatar của người dùng"
        /> */}
        <div>
          <h3 className="text-xl font-semibold">{userInfor.username}</h3>
          <p className="text-gray-500">{userInfor.dob}</p>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Tên:</h4>
        <p className="text-gray-700">{user.name}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Email:</h4>
        <p className="text-gray-700">{user.email}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Email:</h4>
        <p className="text-gray-700">{user.email}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Email:</h4>
        <p className="text-gray-700">{user.email}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Email:</h4>
        <p className="text-gray-700">{user.email}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Email:</h4>
        <p className="text-gray-700">{user.email}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Email:</h4>
        <p className="text-gray-700">{user.email}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Email:</h4>
        <p className="text-gray-700">{user.email}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Email:</h4>
        <p className="text-gray-700">{user.email}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Email:</h4>
        <p className="text-gray-700">{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
