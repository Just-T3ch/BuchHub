import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Writesection from "./writeSection";
import axios from "axios";
const Addpost = (props) => {
  const { user_id, post_id, post, thumpsUp, comment, setPost } = props;

  const createPost = (post, user_id) => {
    setPost({ ...props, post, user_id });
    axios
      .post("http://localhost:5000/posts", { post, user_id })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="addPost">
      <Writesection {...props} createPost={createPost} />
    </div>
  );
};
export default Addpost;
