const descripter=Object.getOwnPropertyDescriptors(Math,"PI")
console.log(descripter);
console.log(Math.PI);
Math.PI=5
console.log(Math.PI);
name : "ginger chai";
const desc=Object.getOwnPropertyDescriptors(chai,"name");
console.log(desc)

//we can change their properties enumerable and so on