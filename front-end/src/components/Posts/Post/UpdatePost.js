import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";


const UpdatePost = (props) => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const { postAttr } = props;

  const updatePost = () => {
    axios
      .put(`http://localhost:5000/post/${postAttr.post_id}`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <div>
        <div
      className="well well-sm well-social-post col-md-11 p-0"
      style={{ borderRadius: "15px" }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          
        }}
      >
        <textarea
          className="form-control shadow-none"
          style={{ borderRadius: "15px" }}
          
          
          onChange={(e) => {
            
          }}
        ></textarea>
        <div
          className="list-inline post-actions p-1 "
          style={{ borderRadius: "15px" }}
        >
          <div className=" d-flex justify-content-start">
            <button
              className={`btn btn-success`}
              style={{ borderRadius: "15px" }}
            >
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
      

    </div>
  );
};

export default UpdatePost;
