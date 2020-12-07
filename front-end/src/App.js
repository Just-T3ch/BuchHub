import React, { useState } from "react";
import "./App.css";
import Library from "./components/library/Library";
import Login from "./components/Login";
import Register from "./components/Register";
import Posts from './components/Post/Posts';
import AddPost from './components/Post/AddPost';

const App = () => {
  return (
    <div>
      <AddPost/>
      <Posts/>
      <Login />
      <Register />
      <Library />
    </div>
  );
};

export default App;
