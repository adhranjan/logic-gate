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
            return eval(Boolean(currentValue), Boolean(previousValue))
        },
        false
      );
      
};
module.exports = check;