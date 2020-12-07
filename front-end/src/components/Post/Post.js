import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
const Post = (props) => {
//   const { post_id, post, thumbs_up, user_id } = props.postInfo;
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const id = decoded.user_id;

  const deletePost = () => {
      console.log(props.postInfo.post_id)
    if (props.postInfo.post_id === undefined) {
      console.log("Post id is not defined");
    }
    axios
      .delete(`http://localhost:5000/posts/${props.postInfo.post_id}`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="post">
      <h3>{props.postInfo.post}</h3>
      <button onClick={deletePost}>Remove</button>
    </div>
  );
};
export default Post;
