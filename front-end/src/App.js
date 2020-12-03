import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./App.css";
import Post from "./Components/Post/post";
import Addpost from "./Components/Post/addPost";
import Login from "./Components/Post/login";
const App = () => {
  const [decodedToken, setDecodedToken] = useState({});
  const jwtoken = localStorage.getItem("token");
  const decoded = jwt_decode(jwtoken);

  const [user, setUser] = useState({
    user_id: null,
    username: "",
    email: "",
    password: "",
    phone: "",
    role_id: null,
  });
  const [post, setPost] = useState({
    user_id: null,
    post_id: null,
    post: "",
    thumpsUp: 0,
    comment: "",
  });
  //Setting state for the user to use it in the page
  setUser({
    ...user,
    user_id: decoded.user_id,
    username: decoded.username,
    email: decoded.email,
  });

  //Get all posts from database  and push the posts to the the array
  const getAllPosts = () => {
    let posts = [];
    axios
      .get("http://localhost:5000/posts")
      .then((response) => {
        //Check if the post exists or if the user is not logged in
        //If true skip getting posts
        if (
          posts.indexOf(response.data) !== -1 ||
          posts.indexOf("login first") !== -1
        ) {
          console.log("Data exists");
        } else {
          console.log(response);
          posts.push(response.data);
          console.log(posts);
        }
        if (response.data === "login first") {
          return null;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //Map method on the posts array to add the posts to a list and render this list in the app
    posts.map((element, index) => {
      return (
        <li>
          <Post
            decodedToken={decoded}
            setDecodedToken={setDecodedToken}
            post={element}
          />
        </li>
      );
    });
  };
  useEffect(() => {
    document.title = "Geek books";
    getAllPosts();
  });
  return (
    <div className="app">
      <Addpost {...post} setPost={setPost} />
      <Login />
    </div>
  );
};
export default App;
