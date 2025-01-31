const name="Tanu"
const course="Btech"

console.log(`Hello  my name is ${name} and my course is ${course} `);//here we use backticks symbol 


//2nd way
const gameName= new String('tanu')
console.log(gameName.length);
console.log(gameName[0]);

console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(2));//showing char of that psition
console.log(gameName.indexOf('t'));//showing index

const newString=gameName.substring(0,3);
console.log(newString);

const another=gameName.slice(-1,2)
console.log(another);

const new1="  tanu  "//trim method for removing extra space
console.log(new1);
console.log(new1.trim());


const url="https://hitsh.com/hitesh"//for replace this 
url.replace('histesh','tan');
console.log(url.replace('hitesh','tan'));

console.log(url.includes('tanu'));//checking for values in it that it is present or not

