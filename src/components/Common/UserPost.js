import React from 'react';


function Post({ post }) {
  return (
    <div className=" bg-gray-100 flex justify-center items-center p-4 rounded-2xl my-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl text-blue-600 font-bold mb-4">{post.username}</h1>
        <div className="flex justify-between items-center">
          <span className={`text-sm font-semibold px-2 py-1 rounded ${post.status === 'public' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
            {post.status === 'public' ? 'Public' : 'Private'}
          </span>
          <span className="text-sm text-blue-600">{post.type}</span>
        </div>
        <p className="text-gray-700 mb-4">{post.content}</p>
        <div className="flex justify-end space-x-2 mt-4">
          <button className="text-sm px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500">Sửa</button> {/* // Thêm nút sửa */}
          <button className="text-sm px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Xoá</button> {/* // Thêm nút xoá */}
        </div>
      </div>
    </div>

  );
}

export default Post;