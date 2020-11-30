import React, { useState, useEffect } from "react";
import axios from "axios";
const Activity = (props) => {
  const { userId, postId, post, thumpsUp, comment, setPost } = props;
  //Function for adding likes to the post
  const like = () => {
    setPost({ thumpsUp: thumpsUp + 1 });
    const thumps = thumpsUp;
    axios
      .post("http://localhost:5000/post", { thumps })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="activity">
      <button onClick={like}>Like</button>
      <button>Share</button>
    </div>
  );
};
export default Activity;
