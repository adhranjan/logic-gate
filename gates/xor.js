const boolean = require('boolean');
const isFunction = require('is-function');
const eval = (first,second) => {
    return ( first || second ) && !( first && second );
  }
  

const check = (...params) => {
    return params.reduce(
        (previousValue, currentValue) => {
            if (isFunction(currentValue)) {
                currentValue = currentValue()  
            }
            return eval(boolean.boolean(currentValue), boolean.boolean(previousValue))
        },
        false
      );
      
};
module.exports = check;