import React, { useState, useEffect } from "react";
import axios from "axios";
const Deletepost = (props) => {
  const { post_id, setPost } = [props.post_id, props.setPost];
  const deletePost = () => {
    axios
      .delete(`http://localhost:5000/posts:${post_id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="deletePost">
      <button onClick={deletePost}>Remove</button>
    </div>
  );
};
export default Deletepost;
