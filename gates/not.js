const boolean = require('boolean');
const isFunction = require('is-function');  

const check = (...params) => {
    if (params.length !== 1) {
        throw new Error('Expected only one input')
    }
    let p = params[0];
    if (isFunction(p)) {
        return !boolean.boolean(p())  
    }
    return !boolean.boolean(p)
};
module.exports = check;