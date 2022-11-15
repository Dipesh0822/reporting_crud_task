const express = require("express");
const Router = express();
const userRouter = require('./../router/user')
const reportRouter = require('./../router/report')

Router.use('/users', userRouter)

Router.use('/reports', reportRouter)

module.exports = Router;