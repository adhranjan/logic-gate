# Logic Gates

```
  npm i logic-gate
```

## Example
```
const gates = requrie('logic-gate');
gates.and(1,1); //true
gates.and(true,false); //false
gates.and(1,0, ()=>{
  return false
}); //false
```
## Supported Gates
* and
* nand
* nor
* not
* xor
* xnor
* or
