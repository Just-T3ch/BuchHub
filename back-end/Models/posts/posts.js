const connection = require("../../db");
require("dotenv").config();

//Show all posts
const getAllPosts = (req, res) => {
  let query = "SELECT * FROM Post";
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Update posts
const updatePostsById = (req, res) => {
  let post = req.body.post;
  let postID = req.params.post_id;
  let sql = `UPDATE post SET post=? WHERE post_id=?`;
  connection.query(sql, post, postID, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Add new posts
const addPost = (req, res) => {
  let query = "INSERT INTO Post(post,thumbs_up,user_id,post_id) VALUES (?,?,?,?)";
  let data = [req.body.post,req.body.thumbUp,req.body.user_id,req.body.post_id];
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

//Show postsByID
const getPostByID = (req, res) => {
  let data = req.params.post_id;
  let query = `SELECT * FROM Post WHERE post_id=?`;
  connection.query(query, data, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};
//Delete posts
const deletePostById = (req, res) => {
  let postID = req.params.post_id;
  let query = `DELETE FROM Post WHERE post_id=?`;
  connection.query(query, postID, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

module.exports = {
  getAllPosts,
  getPostByID,
  updatePostsById,
  deletePostById,
  addPost
};
