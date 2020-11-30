import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Post from "./Components/Post/post";
const App = () => {
  //Setting state for the user to use it in the page
  const [user, setUser] = useState({
    user_id: null,
    username: "",
    email: "",
    password: "",
    phone: "",
    role_id: null,
  });
  useEffect(() => {
    document.title = "Geek books";
  });
  return (
    <div>
      <Post />
    </div>
  );
};
export default App;
