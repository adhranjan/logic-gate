const isFunction = require('is-function');  

const check = (...params) => {
    if (params.length !== 1) {
        throw new Error('Expected only one input')
    }
    let p = params[0];
    if (isFunction(p)) {
        return !Boolean(p())  
    }
    return !Boolean(p)
};
module.exports = check;