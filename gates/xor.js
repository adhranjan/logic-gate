const not = require('./not.js');

const eval = (first,second) => {
    return ( first || second ) && not( first && second );
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