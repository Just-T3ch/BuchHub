import React, { useState, useEffect } from "react";
import axios from "axios";
import Profilepic from "./profilePic";
import Addcomment from "./addComment";
import Userinfo from "./user";
import Activity from "./activity";
import Comment from "./comment";
const Post = (props) => {
  //The state contains the columns of the post table
  const [post, setPost] = useState({
    user_id: null,
    post_id: null,
    post: "",
    thumpsUp: 0,
    comment: "",
  });
  //Setting the user state which contains the user information
  const [user, setUser] = useState({
    userId: null,
    username: "",
    email: "",
    password: "",
    phone: "",
    role_id: null,
  });
  return (
    <div className="post">
      <Profilepic {...post} setPost={setPost} />
      <Userinfo {...user} setUser={setUser} />
      <Comment {...post} setPost={setPost} />
      <Activity {...post} setPost={setPost} />
      <Addcomment {...post} setPost={setPost} />
    </div>
  );
};
export default Post;
