import React, { useState, useEffect } from "react";
import Deletepost from "./deletePost";
const Post = (props) => {
  const { decodedToken, setDecodedToken } = [props.decodedToken, props.setDecodedToken];
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
    user_id: null,
    username: "",
    email: "",
  });
  setUser({
    ...user,
    user_id : decoded.user_id,
    username : decoded.username,
    email : decoded.email
  })
  setPost({
    ...post,
    post_id,
    post,
    thumpsUp,
    comment
  })
  return (
    <div className="post">
      <h3>{post}</h3>
      <Deletepost {...post} setPost={setPost} />
    </div>
  );
};
export default Post;
