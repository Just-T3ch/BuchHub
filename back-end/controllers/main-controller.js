const signIn = require("../Models/User/Entry/login");
const signUp = require("../Models/User/Entry/signup");
// follow section
const followUser = require("../Models/followSystem/following");
const getFollowers = require("../Models/followSystem/get-followers");
const getUserFollowing = require("../Models/followSystem/get-following");
const unFollows = require("../Models/followSystem/unfollows");
// chat section
const liveChat = require("../Models/LiveChat/live-chat");
const getUserChat = require("../Models/LiveChat/get-chat");
const userChats = require("../Models/LiveChat/user-chats");
// group section
const createGroup = require("../Models/Class/create-group");
const deleteGroup = require("../Models/Class/delete-group");
const addMembers = require("../Models/Class/add-members");
const getMembers = require("../Models/Class/get-members");
const userGroups = require("../Models/Class/get-user-groups");
const getGroupPosts = require("../Models/Class/group-post");
const removeMember = require("../Models/Class/remove-member");
// post section
const addPost = require("../Models/Post/create-post");
const homePost = require("../Models/Post/home-post");
const deletePost = require("../Models/Post/delete-post");
const { getUserPosts, getPostByID } = require("../Models/Post/get-post");
const updatePosts = require("../Models/Post/update-post");
const likes = require("../Models/Post/like");
const postLikes = require("../Models/Post/get-like");
// comment section
const addComment = require("../Models/Comments/create-comment");
const deleteComment = require("../Models/Comments/delete-comment");
const updateComments = require("../Models/Comments/update-comment");
const { getComment, PostComments } = require("../Models/Comments/get-comment");
const likeComments = require("../Models/Comments/like");
const commentLikes = require("../Models/Comments/get-like");
// user List section
// read section
const readBook = require("../Models/UserList/read/add-book");
const removeReadBook = require("../Models/UserList/read/remove-book");
const getReadList = require("../Models/UserList/read/get-list");
// reading section
const reading = require("../Models/UserList/reading/add-book");
const removeReadingBook = require("../Models/UserList/reading/remove-book");
const getReadingList = require("../Models/UserList/reading/get-list");
// want to read section
const wantToRead = require("../Models/UserList/want-to-read/add-book");
const removeToReadBook = require("../Models/UserList/want-to-read/remove-book");
const getToReadList = require("../Models/UserList/want-to-read/get-list");
// User Profile/Edit profile
const getUserByName = require("../Models/User/UserPage/get-user");
const changeEmail = require("../Models/User/UserPage/change-email");
const changePassword = require("../Models/User/UserPage/change-password");
const changeNumber = require("../Models/User/UserPage/change-phone");
// sign up
const register = signUp;
//Login
const login = signIn;
const home = (req, res) => {
  res.json("Welcome To Your Place");
};
// follow section
const follow = followUser;
const getFollower = getFollowers;
const getFollowing = getUserFollowing;
const unfollowUser = unFollows;
// chat section
const chatting = liveChat;
const getChat = getUserChat;
const userChat = userChats;
// group section
const newGroup = createGroup;
const removeGroup = deleteGroup;
const addMember = addMembers;
const getGroupMember = getMembers;
const userGroup = userGroups;
const removeUser = removeMember;
// post section
const createPost = addPost;
const homePosts = homePost;
const removePost = deletePost;
const usersPost = getUserPosts;
const post = getPostByID;
const groupPosts = getGroupPosts;
const like = likes;
const updatePost = updatePosts;
const postLike = postLikes;
// comment section
const comment = getComment;
const postComment = PostComments;
const removeComment = deleteComment;
const updateComment = updateComments;
const likeComment = likeComments;
const createComment = addComment;
const commentLike = commentLikes;
// user List section
// read section
const readList = readBook;
const removeReadList = removeReadBook;
const getRead = getReadList;
// reading section
const readingList = reading;
const removeReadingList = removeReadingBook;
const getReading = getReadingList;
// want to read section
const ToReadList = wantToRead;
const removeToReadList = removeToReadBook;
const getToRead = getToReadList;
// User Profile/Edit profile
const getUser = getUserByName;
const changePhone = changeNumber;
const editPassword = changePassword;
const editEmail = changeEmail;
module.exports = {
  login,
  register,
  home,
  follow,
  getUser,
  getFollower,
  getFollowing,
  unfollowUser,
  chatting,
  getChat,
  userChat,
  newGroup,
  removeGroup,
  addMember,
  getGroupMember,
  userGroup,
  removeUser,
  createPost,
  removePost,
  usersPost,
  post,
  groupPosts,
  like,
  updatePost,
  comment,
  postComment,
  removeComment,
  updateComment,
  likeComment,
  createComment,
  readList,
  removeReadList,
  readingList,
  removeReadingList,
  ToReadList,
  removeToReadList,
  getRead,
  getReading,
  getToRead,
  editEmail,
  editPassword,
  changePhone,
  homePosts,
  postLike,
  commentLike,
};
