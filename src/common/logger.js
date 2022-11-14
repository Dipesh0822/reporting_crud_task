const chalk = require('chalk');

/**
 *  @date 14-11-2022
 *  @desc Log used for Success
**/
async function success(requestName, params) {
    console.log(chalk.green(requestName, JSON.stringify(params)));
}

/**
 *  @date 14-11-2022
 *  @desc Log used for Success
**/
async function error(requestName, params) {
    console.log(chalk.red(requestName, JSON.stringify(params)));
}

/**
 *  @date 14-11-2022
 *  @desc Log used for Success
**/
async function warning(requestName, params) {
    console.log(chalk.magenta(requestName, JSON.stringify(params)));
}

/**
 *  @date 14-11-2022
 *  @desc Log used for Success
**/
async function info(requestName, params) {
    console.log(chalk.yellowBright(requestName, JSON.stringify(params)));
}

module.exports = { success, error, warning, info };