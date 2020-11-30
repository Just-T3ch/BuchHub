import React, { useState, useEffect } from "react";
import axios from "axios";

const Addcomment = (props) => {
  const { userId, postId, post, thumpsUp, comment, setPost } = props;
  //Function for handling the input change and setting the state to the input value
  const handleChange = (e) => {
    setPost({ comment: e.target.value });
  };
  //Function for creating the comment in the database
  const createComment = () => {
    if(!comment){
      return 'Please add a comment'
    }
    const comment = comment;
    console.log(comment);
    axios
      .post("http://localhost:5000/comments", { comment })
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="addComment">
      <form>
        <input
          type="text"
          value={props.comment}
          placeholder="Write a comment"
          onChange={handleChange}
        />
      </form>

      <button onClick={createComment}>Add</button>
    </div>
  );
};
export default Addcomment;
