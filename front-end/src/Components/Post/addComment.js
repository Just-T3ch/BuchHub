import React, { useState, useEffect } from "react";
const Addcomment = (props) => {
  console.log(props);
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    props.setPost({ ...props.post, comment: e.target.value });
  };
  return (
    <div className="addComment">
      <input
        type="text"
        value={props.comment}
        placeholder="Write a comment"
        onSubmit={handelSubmit}
        onChange={handleChange}
      />
      <button>Add</button>
    </div>
  );
};
export default Addcomment;
