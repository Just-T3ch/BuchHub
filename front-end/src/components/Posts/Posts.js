import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";
import "./Posts.css";
const Posts = () => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const username = decoded.username;
  const [postsArray, setPostsArray] = useState([])

  const getUserPosts = ()=>{
    axios
      .get(`http://localhost:5000/${username}/post`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response)=>{
        console.log(response)
        if(response.data === "Add new posts ") {
          console.log("Add Posts")
          return;
        }
        setPostsArray([...response.data])
      })
      .catch((err)=>{
        throw err;
      });
    };
  useEffect(()=>{
    getUserPosts()
  },[])

  const arrayOfPosts = postsArray.map((elem, i) => {
    return <Post postElement={elem} key={i + 1} getUserPosts={getUserPosts}/>;
  });
  return (
    <div className="container bootstrap snippets bootdey ">
      <div className="row d-flex align-items-center justify-content-center">
        <CreatePost postsArray={postsArray} setPostsArray={setPostsArray} getUserPosts={getUserPosts}/>
        <div
          className="row d-flex align-items-center justify-content-center "
          style={{ borderRadius: "20px", width: "90%" }}
        >
          {arrayOfPosts.reverse()}
        </div>
      </div>
    </div>
  );
};

export default Posts;
