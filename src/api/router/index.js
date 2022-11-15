const express = require("express");
const Router = express();
const userRouter = require('./../router/user')
const reportRouter = require('./../router/report')
const ticketRouter = require('./../router/ticket')
const replyRouter = require('./../router/reply')

Router.use('/users', userRouter)

Router.use('/reports', reportRouter)

Router.use('/tickets', ticketRouter)

Router.use('/replies', replyRouter)

module.exports = Router;