import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Post from "./Components/Post/post";
const App = () => {
  const [user,setUser] = useState({
    user_id : null,
    username : '',
    email : '',
    password : '',
    phone : '',
    role_id : null
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    document.title = "Geek books";
  });
  return (
    <div>
      <Post/>
    </div>
  );
};
export default App;
