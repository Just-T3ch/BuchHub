import React, { useState, useEffect } from "react";
import axios from 'axios';
const Userinfo = (props) => {
  const { userId, username, email, password, phone, roleId, setUser } = props;
  const getUserName = () => {
    axios
      .get("http://localhost:5000/user")
      .then((response) => {
        console.log(response.data);
        const username = response.data.username
        setUser({username})
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="userInfo">
      <h1>{username}</h1>
      <h3>Followers:100</h3>
      <h4>Rate:4.2</h4>
    </div>
  );
};
export default Userinfo;
