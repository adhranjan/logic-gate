const and = require('./and.js');
const check = (...params) => {
    return !(and(...params))
    
};
module.exports = check;