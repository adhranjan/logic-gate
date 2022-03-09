let xor = require('./xor.js');

const check = (...params) => {
    return !xor(...params)
      
};
module.exports = check;