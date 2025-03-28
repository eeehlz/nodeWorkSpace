// inner_module/01_console.js

const fs = require('fs');
const {Console} = require('console');

const logOutPut
      = fs.createWriteStream('./logs/stdout.log');
const errOutPut
      = fs.createWriteStream('./logs/stderr.log');

const logger
      = new Console({stdout : logOutPut,
                     stderr : errOutPut});
let count = 5;
logger.log('count : %d', count); // stdout
logger.error(`count : ${++count}`); // stderr

