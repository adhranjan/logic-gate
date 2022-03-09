const isFunction = require('is-function');
const check = (...params) => {
    return params.reduce(
        (previousValue, currentValue) => {
            if (isFunction(currentValue)) {
                currentValue = currentValue()  
            }
            return Boolean(currentValue) && Boolean(previousValue)
        },
        true
      );
      
};
module.exports = check;