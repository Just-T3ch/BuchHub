import React, { useState, useEffect } from "react";
import Profilepic from "./profilePic";
import Addcomment from "./addComment";
import Userinfo from "./userInfo";
import Activity from "./activity";
import Comment from "./comment";
const Post = (props) => {
  const [post, setPost] = useState({
    userId: 0,
    postId: 0,
    post: "",
    thumpsUp: 0,
    comment: "",
  });

  return (
    <div className="post">
      <Profilepic />
      <Userinfo />
      <Comment />
      <Activity />
      <Addcomment post={post} setPost={setPost} />
    </div>
  );
};
export default Post;
