import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Post from "./Post";
const Posts = (props) => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const id = decoded.user_id;
  const [postsArray,setPostsArray] = useState([])

  axios
    .get("http://localhost:5000/posts", {
      headers: { Authorization: `Basic ${token}` },
    })
    .then((response) => {
      setPostsArray([...response.data])
    })
    .catch((err) => {
      throw err;
    });
  const arr = postsArray.map((elem, i) => {
    return <Post  postInfo={elem} key={i} />;
  });

return <div className="posts">{arr.reverse()}</div>;
};
export default Posts;
