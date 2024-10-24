import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../Common/UserPost';
function PostCreation() {
  const [postUser, setPostUser] = useState(null); // Sử dụng null thay vì [] để xác định trạng thái loading.

  const blogPost = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const listPost = response.data
      console.log(listPost)
      setPostUser(listPost); // Lưu dữ liệu vào state.
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    blogPost();
  }, []); // Chạy một lần khi component mount.
  return (
    <div>
      {postUser ? postUser.map((post) =>
        <Post post={post} key={post.id} />)
        :
        "loading"
      }
    </div>
  );
}

export default PostCreation;