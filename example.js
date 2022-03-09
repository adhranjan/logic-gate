let gate = require('./index');
console.log({ true: gate.or(1, 2, 0) })

console.log({
    falseWithFunction: gate.or(false, 0, () => { 
        return false
})})

console.log({
    andAllFalse: gate.and(false, 0, () => { 
        return false
})})


console.log({
    nandAllFalse: gate.nand(false, 0, () => { 
        return false
})})


console.log({notFalse: gate.not(false)})

console.log({xor: gate.xor(0,0,0)})
