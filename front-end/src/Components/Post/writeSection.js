import React, { useState, useEffect } from "react";
import axios from 'axios';
import jwt_decode from "jwt-decode";
const Writesection = (props) => {
  const { user_id, post_id, post, thumpsUp, comment, setPost, add ,createPost} = props; 

  //Getting the token and using the payload
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const id = decoded.user_id;
  ////////////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/posts",post,{auth:token})
      .then((response)=>{
        console.log(response)
      })
      .catch((err)=>{
        console.log(err)
      })
    setPost({post:"",user_id:id})
    createPost(post,user_id)


  };
  const handleChange = (e) => {
    setPost({ ...props, post: e.target.value });
  };
  
  return (
    <div className="writeSection">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your sayings"
          value={props.post}
          onChange={handleChange}
        />
        <input type="submit" value="Add Post" />
        
      </form>
    </div>
  );
};
export default Writesection;
