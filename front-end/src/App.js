import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Post from "./Components/Post/post";
const App = () => {
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
