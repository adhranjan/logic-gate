const or = require('./or.js');
const check = (...params) => {
    return !(or(...params))
    
};
module.exports = check;