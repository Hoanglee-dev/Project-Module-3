// import React from "react";
// import { Link } from "react-router-dom";
// function Post({ post, removeProduct }) {
//   return (
//     <div className=" bg-gray-100 flex justify-center items-center p-4 rounded-2xl my-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
//         <h1 className="text-2xl text-blue-600 font-bold mb-4">
//           {post.username}
//         </h1>
//         <div className="flex justify-between items-center">
//           <span
//             className={`text-sm font-semibold px-2 py-1 rounded ${
//               post.status === "public"
//                 ? "bg-green-200 text-green-800"
//                 : "bg-red-200 text-red-800"
//             }`}
//           >
//             {post.status === "public" ? "Public" : "Private"}
//           </span>
//           <span className="text-sm text-blue-600">{post.type}</span>
//         </div>
//         <p className="text-gray-700 mb-4">{post.content}</p>
//         <div className="flex justify-end space-x-2 mt-4">
//           <Link
//             to={`/edit-post/${post.id}`}
//             className="text-sm px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500"
//           >
//             Sửa
//           </Link>
//           <button
//             className="text-sm px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//             onClick={() => removeProduct(post.id)}
//           >
//             Xoá
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Post;
import React from "react";
import { Link } from "react-router-dom";

function Post({ post, removeProduct }) {
  const handleLike = () => {
    // Logic xử lý nút Like
    console.log(`Liked post with ID: ${post.id}`);
  };

  const handleDislike = () => {
    // Logic xử lý nút Dislike
    console.log(`Disliked post with ID: ${post.id}`);
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center p-4 rounded-2xl my-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl text-blue-600 font-bold mb-4">
          {post.username}
        </h1>
        <div className="flex justify-between items-center">
          <span
            className={`text-sm font-semibold px-2 py-1 rounded ${
              post.status === "public"
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {post.status === "public" ? "Public" : "Private"}
          </span>
          <span className="text-sm text-blue-600">{post.type}</span>
        </div>
        <p className="text-gray-700 mb-4">{post.content}</p>
        <div className="flex justify-end space-x-2 mt-4">
          <Link
            to={`/edit-post/${post.id}`}
            className="text-sm px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500"
          >
            Sửa
          </Link>
          <button
            className="text-sm px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={() => removeProduct(post.id)}
          >
            Xoá
          </button>
          <button
            className="text-sm px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handleLike}
          >
            Like
          </button>
          <button
            className="text-sm px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            onClick={handleDislike}
          >
            Dislike
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
