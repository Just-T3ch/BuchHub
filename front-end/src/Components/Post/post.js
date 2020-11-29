import React, { useState, useEffect } from "react";
import axios from "axios";
import Profilepic from "./profilePic";
import Addcomment from "./addComment";
import Userinfo from "./userInfo";
import Activity from "./activity";
import Comment from "./comment";
const Post = (props) => {
  //The state contains the columns of the post table
  const [post, setPost] = useState({
    userId: null,
    postId: null,
    post: "",
    thumpsUp: 0,
    comment: "",
  });
  axios
    .get("http://localhost:5000/")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });


  return (
    <div className="post">
      <Profilepic />
      <Userinfo />
      <Comment />
      <Activity {...post} setPost={setPost}/>
      <Addcomment {...post} setPost={setPost} />
    </div>
  );
};
export default Post;
