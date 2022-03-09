const boolean = require('boolean');
const isFunction = require('is-function');
const check = (...params) => {
    return params.reduce(
        (previousValue, currentValue) => {
            if (isFunction(currentValue)) {
                currentValue = currentValue()  
            }
            return boolean.boolean(currentValue) && boolean.boolean(previousValue)
        },
        true
      );
      
};
module.exports = check;