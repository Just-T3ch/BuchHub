import React from "react";
import jwt_decode from "jwt-decode";
import CreateComment from "./CreateComment";
import "./Comment.css";
import LikeAndDislike from './LikeAndDislike';

const Comment = (props) => {
  //Post attributes from the post component
  const {postAttr, comment} = props

  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const userData = decoded.username;
  return (
    <div className="comments pb-3">
      <div>
        <div className="d-flex flex-row mb-2">
          {" "}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEAmVMcXnv146RjpoVMLW2bVXyJjfc3Re-Q&usqp=CAU"
            width="40"
            height="45"
            className="rounded-circle"
            alt=""
          />
          <div className="d-flex flex-column ml-2">
            {" "}
            <span className="name">{comment.username}</span>{" "}
            <small className="comment-text pr-2 pt-2 pb-2">
              {comment.comment}
            </small>
            <div className="d-flex flex-row align-items-center status">
              {" "}
              <LikeAndDislike comment={comment}/>
              <small className="pl-3">{comment.created_time}</small>{" "}
            </div>
          </div>
        </div>
        {/* Input field for creating comments */}
        <CreateComment post_id={postAttr.post_id}/>
      </div>
    </div>
  );
};

export default Comment;
