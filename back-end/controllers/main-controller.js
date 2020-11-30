const signIn = require("../Models/User/LogIn");
const signUp = require("../Models/User/signup");
const getUser = require("../Models/User/userInfo");
// sign up
const register = signUp;
//Login
const logIn = signIn;
const home = (req, res) => {
  res.json("Welcome To Your Place");
};
module.exports = {
  logIn,
  register,
  home,
  getUser,
};
