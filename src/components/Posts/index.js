import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../Common/UserPost';

function Posts() {
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

  // Hiển thị loading khi postUser chưa có dữ liệu, và hiển thị bài viết khi có.
  return (
    <>
      {/* {postUser ? (
        <Post post={postUser} key={postUser.id} /> // Hiển thị một đối tượng duy nhất.
      ) : (
        <p>Loading...</p> // Hiển thị thông báo loading.
      )} */}
      {postUser ? postUser.map((post) =>
        <Post post={post} key={post.id} />)
        :
        "loading"
      }
    </>
  );
}

export default Posts;
