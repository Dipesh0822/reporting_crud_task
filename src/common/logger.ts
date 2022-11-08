import chalk from 'chalk';

/**
 *  @date 22-07-2022
 *  @desc Log used for Success
**/
async function success(requestName: string, params?: any) {
    console.log(chalk.green(requestName, JSON.stringify(params)));
}

/**
 *  @date 22-07-2022
 *  @desc Log used for Success
**/
async function error(requestName: string, params?: any) {
    console.log(chalk.red(requestName, JSON.stringify(params)));
}

/**
 *  @date 22-07-2022
 *  @desc Log used for Success
**/
async function warning(requestName: string, params?: any) {
    console.log(chalk.magenta(requestName, JSON.stringify(params)));
}

/**
 *  @date 22-07-2022
 *  @desc Log used for Success
**/
async function info(requestName: string, params?: any) {
    console.log(chalk.yellowBright(requestName, JSON.stringify(params)));
}

export { success, error, warning, info };