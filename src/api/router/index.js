const express = require("express");
const Router = express();
const userRouter = require('./../router/user')

Router.use('/users', userRouter)

module.exports = Router;