import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Common/UserPost";

function Posts() {
  const [postUser, setPostUser] = useState(null); // Sử dụng null thay vì [] để xác định trạng thái loading.

  const blogPost = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const listPost = response.data;
      // console.log("🚀 ~ blogPost ~ listPost:", listPost)
      setPostUser(listPost); // Lưu dữ liệu vào state.
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const removeProduct = async (id) => {
    try {
      const postusser = await axios.delete(
        `http://localhost:3000/posts/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("🚀 ~ removeProduct ~ postusser:", postusser);
      await blogPost();
      alert("xoa thanh cong");
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    blogPost();
  }, []); // Chạy một lần khi component mount.

  // Hiển thị loading khi postUser chưa có dữ liệu, và hiển thị bài viết khi có.
  return (
    <>
      {postUser
        ? postUser.map((post) => (
            <Post post={post} key={post.id} removeProduct={removeProduct} />
          ))
        : "loading"}
    </>
  );
}

export default Posts;
