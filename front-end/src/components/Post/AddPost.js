import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from 'axios';
const AddPost = (props) => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const id = decoded.user_id;
  const [postState, setPost] = useState({
    user_id: id,
    post_id: null,
    post: "",
    thumbsUp: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/posts", postState, {headers: { Authorization: `Basic ${token}`}})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        throw err;
      });
    setPost({post:""})
  };
  return (
    <div className="addPost">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your sayings"
          onChange={(e) => {
            setPost({ ...postState, post: e.target.value });
          }}
          value={postState.post}
        />
        <input type="submit" value="Add Post" />
      </form>
    </div>
  );
};
export default AddPost;
