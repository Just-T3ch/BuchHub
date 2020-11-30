const express = require("express");
require("dotenv").config();
const mainRouter = express.Router();
const middleware = require("../middlewares/auth");
const {
  logIn,
  register,
  home,
  getUser,
} = require("../controllers/main-controller");
// Welcome page
mainRouter.get("/", middleware, home);
//Login/sign up users
mainRouter.post("/register", register);
mainRouter.post("/Login", logIn);
//Getting the user information from the database (user table)
mainRouter.get("/user", getUser);
module.exports = mainRouter;
