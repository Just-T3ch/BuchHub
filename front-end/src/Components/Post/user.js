import React, { useState, useEffect } from "react";
import axios from "axios";

const Userinfo = (props) => {
  //The state is based on the columns from the user table
  const { userId, username, email, password, phone, roleId, setUser } = props;

  //Function that uses axios to get user information from the database and changes the state to
  //the information of the user (setState) (this functions works but there is no information coming from the database "The data is empty array", will try to solve this problem)
  const getUserName = () => {
    axios
      .get("http://localhost:5000/user")
      .then((response) => {
        console.log(response.data);
        const username = response.data.username;
        setUser({ username });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="userInfo">
      {/* render the username (from the state) in the page*/}
      <h1>{username}</h1>
      <h3>Followers:100</h3>
      <h4>Rate:4.2</h4>
    </div>
  );
};
export default Userinfo;
