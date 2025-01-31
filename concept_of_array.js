const myArr=[0,1,2,3,4,5]

const myArr2=new Array(1,2,3,4)

//methods of array

myArr.push(6)
myArr.pop()
myArr.unshift(5)//this add value in the starting
myArr.shift() //this remove that value which is add by unshift
myArr.includes(9);

console.log(myArr);

const newarr=myArr.join()//this convert array into string
console.log(myArr);
console.log(typeof newarr);

console.log(myArr.includes(9));

//slice and splice
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);


const myn2=myArr.splice(1,3).//it manepulate original array
console.log(myn2);
console.log(myArr);