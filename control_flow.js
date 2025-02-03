//if
if(condition){//if it is true then execute scope otherwise not

}
//== it check just value
//=== it check also value and datatype

//var is global it is used for declare globally 

const balance=1000
if(balance>500) console.log("it is implicit scope");// it is implicit scope


let bal1;
bal1=5??10//Nullish coalescing operator
console.log(bal1);

//ternary operator
condition ? true : false
const ice=100
ice<= 80?console.log("less than  80") : console.log("more than 80");