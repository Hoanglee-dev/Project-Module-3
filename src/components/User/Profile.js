import React from 'react';

const Profile = () => {
  // Giả lập dữ liệu người dùng
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://via.placeholder.com/150', // URL của ảnh đại diện
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Thông tin người dùng</h2>
      <div className="flex items-center mb-6">
        <img
          className="w-24 h-24 rounded-full object-cover mr-4"
          src={user.avatar}
          alt="Avatar của người dùng"
        />
        <div>
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p className="text-gray-500">{user.email}</p>
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
    </div>
  );
};

export default Profile;
