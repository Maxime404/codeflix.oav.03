const empty = require('./ex01');

function indexedLog(index, func) {
    console.log(index + ' => ' + func);
}

indexedLog(1, empty());
// => 