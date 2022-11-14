/***
 * 
 * @description Express.js connection and routing all project 
 * 
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { errorhandler } = require('../common/error');
const app = express();
const routes = require("./../api/router/index")

/**
 * @desc Main function
 */
app.set('port', process.env.PORT);
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10mb', type: 'application/json' }));
app.use(cors());
/**
 * @desc Get
 */
app.get('/', async (req, res) => {
    return res.status(200).send({
        message: `Welcome to the crud API! \n Endpoints available at http://localhost:${process.env.PORT}/api/v1`
    });
});
app.use('/api/v1', routes);
/**
 * @desc Error 
 */
app.use(errorhandler);
module.exports = app;